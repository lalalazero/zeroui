const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
module.exports = merge(base, {
    mode: 'development',
    entry: {
        index: process.env.IS_APP === 'true' ? "./example/App.tsx" : "./example/Example.tsx"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Zero-UI-React',
            template: './example/example.html',
            favicon: './example/favicon_32x32.png'
        })
    ],

})