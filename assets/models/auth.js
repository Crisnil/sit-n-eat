import {withRouter,routerRedux} from 'dva/router'
// import {get,post} from '../utils/RestClient'
import update from 'react-addons-update'
import axios from 'axios'

export default {
  namespace: 'auth',
  state: {
    isAuthenticated: false,
    isWrongCredentials: false,
    user:{},
    logoutSuccess:false,
    fromStart:false,
    disableSaveEditUser: false
  },

  reducers: {

    getAllReadingSuccess(state,{payload}){
      return update(state,{
          user: {
            $set: payload
          }
      });
    },
  },

  effects: {
    login:[function *({payload},{call,put}){
      axios.create({
          baseURL: "localhost:3000",
          timeout: 1000,
          headers:{
            'Content-Type': 'application/json;charset=UTF-8',
          }
        })
        try{
          let reading = null;
          yield axios.get('/api/login',{
            params:payload
          }).then(response => {
             reading = response.data
             console.log(response,'mao ni siya');
           })

            yield put({
             type:"getAllReadingSuccess",
              payload:reading
            });
        }
        catch (error){
          console.log(error,'error');
          yield put({ type: 'getAllReadingFailed'});

        }
     },{type: 'takeLatest'}],

  },
  subscriptions: {},
};
