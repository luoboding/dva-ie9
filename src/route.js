import React from 'react';
import dynamic from 'dva/dynamic';
import { LocaleProvider } from 'antd';
import { Router, Route } from 'dva/router';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import createRoute from './utils/route-generator';

export default ({
  history,
  app,
}) => {
  const Layout = dynamic({
    app,
    models: () => [
      import('./layout/models/base'),
      import('./layout/models'),
    ],
    component: () => import('./layout/containers'),
  });

  const routeMap = [
    {
      path: '/profession',
      exact: true,
      component: dynamic({
        app,
        models: () => [
          import('./profession/models'),
        ],
        component: () => import('./profession/containers'),
      }),
    },
    {
      path: '/message',
      exact: true,
      component: dynamic({
        app,
        models: () => [
          import('./message/models'),
        ],
        component: () => import('./message/containers'),
      }),
    },
    {
      path: '/search',
      exact: true,
      component: dynamic({
        app,
        models: () => [
          import('./search/models'),
        ],
        component: () => import('./search/containers'),
      }),
    },
    {
      path: '/todo',
      exact: true,
      component: dynamic({
        app,
        models: () => [
          import('./todo/models'),
        ],
        component: () => import('./todo/containers'),
      }),
    },
    {
      path: '/notification',
      exact: true,
      component: dynamic({
        app,
        models: () => [
          import('./notification/models'),
        ],
        component: () => import('./notification/containers/list'),
      }),
    },
    {
      path: '/policy',
      exact: true,
      component: dynamic({
        app,
        models: () => [
          import('./policy/models'),
        ],
        component: () => import('./policy/containers/list'),
      }),
    },
    {
      path: '/setting',
      component: dynamic({
        app,
        models: () => [
          import('./setting/models'),
        ],
        component: () => import('./setting/containers'),
      }),
      children: [
        {
          exact: true,
          path: '/setting/authorization',
          component: dynamic({
            app,
            models: () => [
              import('./authorization/models'),
            ],
            component: () => import('./authorization/containers'),
          }),
        },
        {
          exact: true,
          path: '/setting/banner',
          component: dynamic({
            app,
            models: () => [
              import('./banner/models'),
            ],
            component: () => import('./banner/containers'),
          }),
        },
        {
          exact: true,
          path: '/setting/holiday',
          component: dynamic({
            app,
            models: () => [
              import('./holiday/models'),
            ],
            component: () => import('./holiday/containers'),
          }),
        },
        {
          exact: true,
          path: '/setting/policy',
          component: dynamic({
            app,
            models: () => [
              import('./policy/models'),
            ],
            component: () => import('./policy/containers'),
          }),
        },
        {
          exact: true,
          path: '/setting/notification',
          component: dynamic({
            app,
            models: () => [
              import('./notification/models'),
            ],
            component: () => import('./notification/containers'),
          }),
        },
        {
          path: '/setting',
          component: dynamic({
            app,
            models: () => [
              import('./management/models'),
            ],
            component: () => import('./management/containers'),
          }),
          exact: true,
        },
      ],
    },
    {
      path: '/',
      exact: true,
      component: dynamic({
        app,
        models: () => [
          import('./message/models'),
          import('./index/models'),
        ],
        component: () => import('./index/containers'),
      }), // 入口 不应该拥有自己的layout
    },
    {
      path: '*',
      exact: true,
      component: dynamic({
        app,
        component: () => import('./404'),
      }),
    },
  ];
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Route path="/" component={() => <Layout route={createRoute(routeMap)} />} />
      </Router>
    </LocaleProvider>
  );
};
