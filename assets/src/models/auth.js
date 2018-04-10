import {withRouter,routerRedux} from 'dva/router'
import {get,post} from '../utils/RestClient'
import update from 'react-addons-update'
import axios from 'axios'

export default {
  namespace: 'auth',
  state: {
    isAuthenticated: false,
    isWrongCredentials: false,
    logoutSuccess: false,
    fromStart: false,
    disableSaveEditUser: false
  },
  reducers: {
    accountReceived(state,{account,fromRefresh}){

      return {
        ...state,
        isAuthenticated: true,
        isWrongCredentials: false,
        account:account,
        logoutSuccess:false,
        fromStart:(fromRefresh) ?  false  :true,
        disableSaveEditUser: false
      }
    },

    logoutSuccess(state,{targetPath}){

      return {
        ...state,
        isAuthenticated: false,
        isWrongCredentials: false,
        account:null,
        logoutSuccess:!targetPath,
        fromStart:false,
        disableSaveEditUser: false
      }
    },

    loginFailed(state){

      return {
        ...state,
        isAuthenticated: false,
        isWrongCredentials: true,
        account:null,
        logoutSuccess:false,
        fromStart:false,
        disableSaveEditUser: false
      }
    }

},
  effects: {
    login: [function* ({loginstate, targetPath}, {call, put}) {
       // axios.create({
       //    baseURL: "localhost:3000",
       //     timeout: 1000,
       //     headers:{
       //       'Content-Type': 'application/json;charset=UTF-8',
       //     }
       //  })
      try{
        const response = yield  call(get,'/api/auth/authenticate',{
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
           },
          params:loginstate
        })

        let result = response.data

        console.log("login success",(result));
        //LocalService.set('auth_token', JSON.stringify(result));
        localStorage.setItem("login",JSON.stringify(result));

        yield put( { type: 'loginSuccess',
          targetPath:targetPath,
          fromRefresh:false
          }
        );
      }
      catch (error) {
        console.log(error);
        yield put({
          type:'loginFailed'
        });

      //  yield call(get,'/api/public/ping');

      }
    }, {type: 'takeLatest'}],

    *loginSuccess(payload,{call,put}){
       let {targetPath,fromRefresh} = payload;
       let account = JSON.parse(localStorage.getItem("login"));
        // let localdata = localStorage.getItem("login")
        // console.log("localdata",localdata)
        // let account = atob(localdata);
         console.log("account",account);
      try{
        //  yield call(get,'/api/public/ping');
        yield put({
          type:"accountReceived",
          account:account,
          targetPath:targetPath,
          fromRefresh:fromRefresh,
        });
        if(!fromRefresh)
         console.log("!form refresh");
          yield put(routerRedux.push("/main"));

      }
      catch (error){
        localStorage.removeItem("login");
        // refresh CSRF
      //  yield call(get,'/api/public/ping');

        if(targetPath)
          yield put(routerRedux.push("/login?targetPath="+ targetPath));
        else{
          yield put(routerRedux.push("/login"));
        }

      }
    },

    *logout(payload,{call,put}){

      let {targetPath} = payload;

      try{
        console.log("dispatch log out");
        //
        // yield call(post,'/api/logout',{},{
        //   headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        // });

        localStorage.removeItem("login");
        yield put(routerRedux.push("/login" + (targetPath ? "?targetPath="+targetPath:"")));
      //  yield call(get,'/api/public/ping');
        yield put({
          type:'logoutSuccess',
          targetPath: (targetPath ? "?targetPath="+targetPath:"")
        })

      }
      catch (error){
        localStorage.removeItem("login");
        yield put(routerRedux.push("/login" + (targetPath ? "?targetPath="+targetPath:"")));
      //  yield call(get,'/api/public/ping');
        yield put({
          type:'logoutSuccess',
          targetPath: (targetPath ? "?targetPath="+targetPath:"")
        })
      }
    }

  },
  subscriptions: {},
};
