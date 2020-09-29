const base = require('./webpack.config')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const lintConfig = require('./.eslintrc.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
module.exports = merge(base, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/'),
    },
    entry: {
        index:
            process.env.IS_APP === 'true'
                ? './example/App.tsx'
                : './example/Example.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Zero-UI-React',
            template: './example/example.html',
            favicon: './example/favicon_32x32.png',
        }),
        new ESLintPlugin({
            baseConfig: lintConfig,
            failOnError: true,
            failOnWarning: true,
            emitError: true,
            fix: true,
            ignorePath: '.eslintignore',
            quiet: true,
        }),
    ],
})
