import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  polyfill: {
    imports: [
      'core-js/features/promise/try',
      'core-js/proposals/math-extensions'
    ]
  },
  routes: [
    { path: '/', 
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/',
          exact: true,
          component: '@/pages/index/index'
        },
        {
          path: '/control/dropdown',
          exact: true,
          component: '@/pages/control/dropdown/'
        },
        {
          path: '/control/cascader',
          exact: true,
          component: '@/pages/control/cascader/'
        },
        {
          path: '/control/select',
          exact: true,
          component: '@/pages/control/select/'
        },
        {
          path: '/control/table',
          exact: true,
          component: '@/pages/control/table/'
        },
        {
          path: '/control/dataPicker',
          exact: true,
          component: '@/pages/control/dataPicker/'
        }
      ]
    },
  ],
  proxy: {
    "/ap": {
      "target": "http://im-user-test.jdd-hub.com",
      "changeOrigin": true,
      "pathRewrite": { "^/ap" : "api" }
    }
  },
});
