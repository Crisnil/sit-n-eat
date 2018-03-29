// import 'styles/app.scss';
//
// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
//
// import App from 'components/App/App';
// import NotFound from 'components/NotFound/NotFound';
//
// render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App} />
//     <Route path="/*" component={NotFound} />
//   </Router>, document.getElementById('app'));
import dva from 'dva';
import 'styles/app.scss';
import browserHistory from 'history/createBrowserHistory'
import 'antd/dist/antd.less'
import {createLogger} from 'redux-logger';
import router from './router'

// 1. Initialize
let  app = null;
if (process.env.NODE_ENV !== 'production') {
  app = dva({
    history:browserHistory(),
    onAction: createLogger({
      level: 'info',
      collapsed: true,
    })
  });
}
else {
 app = dva({
    history:browserHistory()
  });
}



// 2. Plugins
// app.use({});



// 3. Model
// app.model(require("./models/auth"));

// 4. Router
app.router(router);

// 5. Start
app.start('#app');
