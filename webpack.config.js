var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    cache: false,
    entry: {
        'app': __dirname + '/src/entry.js',
        'script': __dirname + '/src/vendor/entry.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    module: {

    },
    //插件数组
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            title: 'Angular with webpack',
            inject: 'body'
        })
    ]
};