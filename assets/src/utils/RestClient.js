/**
 * Created by albertoclarit on 9/2/16.
 */

import axios from 'axios'

import Promise from 'bluebird'
import _ from 'lodash'


var store = null;


export let  getStore = ()=> {
    return store;
};


function dispatch(){

    if(store ==null){

        return ()=>{

        };
    }

    return store.dispatch;
}



export let registerStore=(storeParam)=>{

    store = storeParam;
};


const defaultConfig = {
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    xsrfCookieName: 'CSRF-TOKEN',
    xsrfHeaderName: 'X-Csrf-Token'
};


// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Do something with response error

    if(store && store.getState().auth.isAuthenticated){
        if(_.get(error,'response.status',0)===401 || _.get(error,'response.status','')==='401')
        {
            setTimeout(()=>{

               /*
               CommonDialogs.Alert.show({
                    title: 'Session Expiry',
                    type: 'warning',
                    message: 'Your Session has expired',
                    onClose: () => {
                        CommonDialogs.Alert.hide();

                        dispatch()(authActions.logout());
                    }

                });
           */

                alert('Your Session has expired');
                dispatch()(authActions.logout());
            },1000);
        }
    }

    return Promise.reject(error);
});


export let get  = (path,config,track=false)=>{

       if(!config)
       config = {};

     config = _.assign({},defaultConfig,config);

     config.track = track;

    return axios.get(path,config);
};

export let post  = (path,body,config,track=true)=>{

    if(!config)
        config = {};


    config = _.assign({},defaultConfig,config);

    config.track = track;

    return axios.post(path,body || {}, config);
};

export let put  = (path,body,config)=>{

    if(!config)
        config = {};

    config = _.assign({},defaultConfig,config);


    return axios.put(path,body || {}, config);
};

export let patch  = (path,body,config,track=true)=>{
    if(!config)
        config = {};

    config = _.assign({},defaultConfig,config);
    config.track = track;

    return axios.patch(path,body || {}, config);
};


export let _delete  = (path,config)=>{

    if(!config)
        config = {};

    config = _.assign({},defaultConfig,config);

    return axios.delete(path,config);

};
