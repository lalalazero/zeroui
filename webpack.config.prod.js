const base = require('./webpack.config')
module.exports = Object.assign({},base,{
    mode: 'production',
    // 不打包 react，使 production 模式下打包出来的代码变小
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: 'React',
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        }
    }
})