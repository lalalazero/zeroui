const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: {
        index: './components/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/components'),
        library: 'zero-ui-react',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.s([ac])ss$/,
                use: [
                    MiniCssExtractPlugin.loader
                    , 'css-loader', 'sass-loader']
            },
            {
                test: /\.md$/,
                loader: require.resolve('./markdown-loader/index.js'),
                // include: [
                //     path.resolve(__dirname, 'example/**/'),
                //   ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin()
    ]
}