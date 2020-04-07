const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        index: "./example/example.tsx"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ZeroUI - React',
            template: './example/example.html',
        })
    ],

})