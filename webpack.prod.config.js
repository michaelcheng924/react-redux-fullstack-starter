var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/components',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'app')
        },
        modules: [
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
                    'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'autoprefixer-loader?browsers=last 3 versions',
                        'sass-loader?outputStyle=expanded'
                    ]
                })
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
        new ExtractTextPlugin("styles.css")
    ],
};
