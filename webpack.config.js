const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output:{
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: '/dist'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Projeto demo',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html'
    }),
    new ExtractTextPlugin({
        filename: 'app.css',
        disable: false,
        allChunks: true
    })
    ]
}   