import React from 'react';
import {Layout,Menu,Icon} from 'antd'
import {withRouter,routerRedux} from 'dva/router'
import  { connect } from 'dva';
import  { Link } from 'dva/router';

const SideMenu = ({history,dispatch}) => {


  const onClick= (item,key,keypath) => {

    dispatch(routerRedux.push('/student-list'));
  };


  return (
    <Layout.Sider>
      <Menu mode="inline"
      >
        <Menu.Item> <Link to={"/main"}><Icon type="pie-chart" /> Dashboard</Link></Menu.Item>
        <Menu.SubMenu title={<div><Icon type="database" /> Menu</div>}>
          <Menu.Item><Icon type="right" /> SubMenu</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu title={<div><Icon type="calculator" /> asd</div>}>
          <Menu.Item><Icon type="right" /> SubMenuItem</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu title={<div><Icon type="schedule" /> Administrative Tools</div>}>
          <Menu.Item><Link to={"/main/users"}><Icon type="right" />gebe</Link></Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>
  );
};

SideMenu.propTypes = {
};

export default connect()(withRouter(SideMenu));
