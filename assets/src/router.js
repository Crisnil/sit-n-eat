import React from 'react';
import { Router, Route, Switch, IndexRoute,IndexRedirect,Redirect } from 'dva/router';
import RouteWithSubRoutes from './routes/RouteWithSubRoutes';
import Home from "./components/App/Home.js";
import {privateRoute} from "./utils/AuthUtils";
import Login from "./components/App/Login";
import HealthCheckHidden from "./components/HealthCheckHidden";
import App from "./components/App/App";
import MainPage from "./components/App/MainPage";
import Dashboard from "./components/App/Dashboard";

function RouterConfig({ history}) {

  const routes = [
    {
      path: '/',
      exact: false,
      component: HealthCheckHidden,
    },
    {
      path: '/',
      component: App,
      routes: [
        { path: '/main',
          exact: false,
          component: privateRoute(MainPage,['ROLE_USER']),
          routes: [
            {
              path: '/main',
              exact: true,
              component: Dashboard,
            },
          ]
        },
        {
          path: '/login',
          exact: true,
          component: Login,
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

          <Route exact path="/" render={() => (
            <Redirect to="/main"/>
          )
          }
          />

        </div>
      </div>
    </Router>
  );
}

export default RouterConfig;
