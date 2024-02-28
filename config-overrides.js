const { addLessLoader, addBabelPlugin, override } = require('customize-cra');

module.exports = override(
    addBabelPlugin([
        'import',
        {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true, // 设置为 true，表示使用 less 进行样式加载
        },
    ]),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
        },
    }),
    (config) => {
        config.output.publicPath = '';
        return config;
    }
);
