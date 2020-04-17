const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        index: "./example/Example.tsx"
    },
    // output: {
    //   publicPath: ''
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Zero-UI-React',
            template: './example/example.html',
            favicon: './example/favicon_32x32.png'
        })
    ],

})