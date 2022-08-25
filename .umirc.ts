import { defineConfig } from 'dumi';
import { resolve } from 'path';
export default defineConfig({
  title: 'arale-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/arale-ui/',
  publicPath: '/arale-ui/',
  history: {
    type: 'hash',
  },
  // more config: https://d.umijs.org/config
  sass: {},
  chainWebpack: (config) => {
    config.module
      .rule('less')
      .test(/\.less$/)
      .oneOf('normal')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: resolve(__dirname, './packages/components/assets/styles/variables.scss'),
      })
      .end();
  },
});
