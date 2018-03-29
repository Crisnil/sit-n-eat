import React from 'react';
import { Router, Route, Switch, IndexRoute,IndexRedirect,Redirect } from 'dva/router';
import RouteWithSubRoutes from './routes/RouteWithSubRoutes';
import App from './components/App/App.js';
import Home from './components/App/Home.js';
import Test from './components/App/Test.js';

function RouterConfig({ history}) {

  const routes = [
    {
      path: '/',
      component: App,
      routes: [
        {
          path: '/',
          exact: true,
          component: Home,
        },
        {
          path: '/test',
          exact: true,
          component: Test,
        }
      ]
    }
  ];


  return (
    <Router history={history}>
      <div>
        <div>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}

          {/* <Route exact path="/" render={() => (
            <Redirect to="/main"/>
          )
          }
          /> */}

        </div>
      </div>
    </Router>
  );
}

export default RouterConfig;
