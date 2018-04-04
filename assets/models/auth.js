import {withRouter,routerRedux} from 'dva/router'
import {get,post} from '../utils/RestClient'

export default {
  namespace: 'auth',
  state: {
    isAuthenticated: false,
    isWrongCredentials: false,
    account:null,
    logoutSuccess:false,
    fromStart:false,
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
    login:[function *({loginstate,targetPath},{call,put}){

      try{
        yield  call(post,'/api/login',{},{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params:loginstate
        });
          console.log(response);
      }
      catch (error){
        console.log(error);

       yield put({
          type:'loginFailed'
        });

        yield call(get,'/api/pingapi');

      }

    },{type: 'takeLatest'}],

  },
  subscriptions: {},
};
