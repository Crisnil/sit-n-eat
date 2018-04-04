import React from 'react';
import { Router, Route, Switch,Link } from 'dva/router';
import {Layout,Icon ,Popover, Button } from 'antd'

import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes';
import { connect } from 'dva';
import _ from 'lodash'
import { LocaleProvider,Divider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import deDE from 'antd/lib/locale-provider/de_De';


function App({routes,auth,dispatch}) {

  const content = (
    <div>
      <Button type={"dashed"} onClick={()=>{

        dispatch({
          type:'auth/logout'
        });


      }}>Logout</Button>
    </div>
  );


  return (
    <LocaleProvider locale={deDE}>
      <Layout style={{
        marginLeft:'auto',
        marginRight:'auto'
      }}>
        <Layout.Header style={{backgroundColor:'white'}}>
          <div style={{float:'left', padding: 10}}>
          </div>
          <div style={{float:'right'}}>

            {_.get(auth,'account.login','') ?
              <Popover content={content} title={_.get(auth,'account.fullName','')} trigger="click">
                <Button type={"dashed"}><Icon type="user" />{_.get(auth,'account.login','')}</Button>
              </Popover>
              :
              <Popover content={content} title="hear " trigger="click">
                <Button type={"dashed"}><Icon type="user" />Register</Button>
              <Divider type="vertical"/>
                <Link to ="/homepage"><Button type={"dashed"}><Icon type="user" />Login</Button></Link>
              </Popover>
            }

          </div>
          <div style={{ padding: 10}}>
            <center><h2 style={{color:'#108ee9'}}>Sit and Eat</h2></center>
          </div>



        </Layout.Header>

        {
          routes.map((route,i)=>{
            return  <RouteWithSubRoutes key={i} {...route}/>
          })
        }

        <Layout.Footer style={{backgroundColor:'white'}}>
          <div style={{textAlign:'center'}}> Copyright 2018 </div>
        </Layout.Footer>
      </Layout>
    </LocaleProvider>

  );
}

function mapStateToProps(state) {
  return {auth:state.auth};
}


export default connect(mapStateToProps)(App);
