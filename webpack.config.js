var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './app/components/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            'app',
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    'babel-loader?presets[]=react,presets[]=es2015'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader?browsers=last 3 versions',
                    'sass-loader?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=8192',
                    'img-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
        },
        host: '127.0.0.1'
    }
};
