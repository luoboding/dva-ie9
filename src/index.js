import dva from 'dva';
import React from 'react';
import 'antd/dist/antd.less';
import 'antd/lib/style/themes/default.less';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';
import { LocaleProvider, message } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Router, Route } from 'dva/router';

import Configure from './env.config';
import customizedhistory from './utils/history';
import createRoute from './utils/route-generator';
import { debounce } from './utils/helper';
import NotFound from './404';

const app = dva({
  history: customizedhistory,
  onError: debounce((error) => {
    message.error(error.message);
  }, 1.5),
});
app.use(createLoading());
if (Configure.debug) {
  app.use({
    onAction: createLogger(),
  });
}

const Layout = require('./layout').default(app);
const Index = require('./index/index.js').default(app);

const routeMap = [
  {
    path: '/notification',
    exact: true,
    component: Notification.list,
  },
  {
    path: '/',
    exact: true,
    component: Index, // 入口 不应该拥有自己的layout
  },
  {
    path: '*',
    exact: true,
    component: NotFound,
  },
];

app.router(({ history }) => (
  <LocaleProvider locale={zhCN}>
    <Router history={history}>
      <Route path="/" component={() => <Layout route={createRoute(routeMap)} />} />
    </Router>
  </LocaleProvider>));
app.start('#root');
