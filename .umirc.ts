
import { defineConfig } from 'umi';
import control from './src/routes/control'
import hook from './src/routes/hook'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {},
  // 开启暗色主题
  antd: {
    dark: false
  },
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
        ...control,
        ...hook
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
