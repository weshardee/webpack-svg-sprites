var HtmlWebpackPlugin = require('html-webpack-plugin');
var SvgStorePlugin = require('webpack-svgstore-plugin');

module.exports = {
    entry: [
        // setup the hot mobule loading
        'webpack-dev-server/client?http://localhost:8080',
        // our entry file
        './app/main.js'
    ],
    output: {
        path: './build',
        filename: 'bundle.[hash].js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {
                test: /\.svg$/,
                loader: 'svg-sprite?' + JSON.stringify({
                    name: '[name]_[hash]',
                    prefixize: true,
                    spriteModule: 'utils/my-custom-sprite'
                })
            },
            // styles
            {
                test: /\.[s]?css$/,
                loader: "style!css!autoprefixer-loader?browsers=last 2 version!sass"
            },
        ],
    },
    plugins: [
        new SvgStorePlugin('app/icons/star.svg', '', {
            name: '[hash].sprite.svg',
            chunk: 'main',
            // baseUrl: '//path-to-cdn:port/',
            prefix: 'plugin-',
            svgoOptions: {
                // options for svgo, optional
            }
        }),
        // https://www.npmjs.com/package/html-webpack-plugin - generate our html file from a template - makes it easier to include custom stuff
        new HtmlWebpackPlugin({
            inject: true,
            title: 'webpack starter template 123',
            filename: 'index.html',
            template: './app/index.html'
        })
    ],
};
