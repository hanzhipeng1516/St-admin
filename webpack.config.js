var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    cache: false,
    entry: {
        'script': __dirname + '/src/vendor/entry.js',
        'app': __dirname + '/src/entry.js',
    },
    devtool: " inline-soure-map",
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    devServer: {
        contentBase: './dist/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3333 //端口你可以自定义
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
            {test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml"},
        ]
    },
    //插件数组
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true,    //为静态资源生成hash值
            minify: {    //压缩HTML文件
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true    //删除空白符与换行符
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};