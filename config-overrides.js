const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        'body-background': '#eeeeee',
        'primary-color': '#0779e4',
        'layout-header-background': '#0779e4',
        'layout-header-color': '#fff',
      },
    },
  })
);
