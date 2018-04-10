import React from 'react';
import {
    Route,
    Redirect
} from 'dva/router'
import _ from 'lodash'
import {connect} from 'dva';


let isInRole = (role,rolesRepo)=>{
    return _.includes(rolesRepo || [], role);
};



let  isInAnyRole  = (roles,rolesRepo)=>{

    roles = _.isArray(roles) ? roles : [];
    var found = false;
    roles.forEach(function(i){

        if(isInRole(i,rolesRepo))
        {
            found = true;
        }

    });


    return found;
};





let privateRoute = (Component, roles)=>{

    var rolesArray = [];
    if(typeof roles === 'string'){
        rolesArray.push(roles);
    }

    if(roles instanceof Array){
        rolesArray = roles;
    }



    class AuthenticatedComponent extends React.Component{

        authenticate= ()=>{
            let newProps = this.props;
            let token = localStorage.login;
            let {dispatch} = newProps;
            var targetPath=newProps.location.pathname + newProps.location.search;
            // this is previously login and then refreshed
            if(token){
                if(!newProps.auth.account){
                    // attempt to get account details based on existing session cookie and csrf
                  dispatch({
                    type:'auth/loginSuccess',
                    targetPath:targetPath,
                    fromRefresh:true
                  });
                }

            }
            else {
                if(!newProps.auth.fromStart)
                    if(targetPath)
                      dispatch({
                        type:'auth/logout',
                        targetPath:targetPath
                      });

                    else
                      dispatch({
                        type:'auth/logout'
                      });

                else {

                }

            }
        };

        render(){

            let content=null;

            if( this.props.auth &&
                this.props.auth.account &&
                this.props.auth.isAuthenticated)
                content = <Component {...this.props}/>;


            setTimeout(()=>{
                this.authenticate();
            },200);


            return content
        }
    }


    const mapStateToProps = (state) => ({
        auth: state.auth
    });

    return  connect(mapStateToProps)(AuthenticatedComponent)
};



export {
    isInRole,
    isInAnyRole,
    privateRoute
}
