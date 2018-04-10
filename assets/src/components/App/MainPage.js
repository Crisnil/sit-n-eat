import React from 'react';
import {Layout} from 'antd'
import RouteWithSubRoutes from "../../routes/RouteWithSubRoutes";
import SideMenu from "./SideMenu";

function MainPage({routes}) {

  return (
    <Layout style={{backgroundColor:'white'}}>
      <Layout.Sider style={{backgroundColor:'white'}}>
        <SideMenu/>
      </Layout.Sider>
      <Layout.Content style={{backgroundColor:'white', marginLeft:'10px'}}>
        {
          routes.map((route,i)=>{
            return  <RouteWithSubRoutes key={i} {...route}/>
          })
        }
      </Layout.Content>
    </Layout>
  );

}

export default MainPage;
