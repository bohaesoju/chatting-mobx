const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const URL_LOADER_SIZE_LIMIT = 8 * 1024;
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "../build")
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../build'),
        index: 'index.html',
        port: 9000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {browsers: ['last 2 chrome versions']},
                            debug: true,
                        }],
                        '@babel/preset-react',
                    ],
                    plugins: ["react-hot-loader/babel", ["@babel/plugin-proposal-decorators", { legacy: true }], ["@babel/plugin-proposal-class-properties", { loose: true }]],
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: URL_LOADER_SIZE_LIMIT
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.jsx','.js', '.css', '.scss']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ]
};
