const path = require('path')
module.exports = {
    entry: {
        index: './components/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/components'),
        library: 'ZeroUI',
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
                use: ['style-loader', 'css-loader', 'sass-loader']
                // use: [
                //     devMode ? 'style-loader' : {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {

                //         }
                //     },
                //     'css-loader',
                //     {
                //         loader: "sass-loader",
                //         options: {
                //             includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
                //         }
                //     }
                // ]
            }
        ]
    }
}