var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [{
                loader: 'babel',
                query: {
                    babelrc: false,
                    presets: [["es2015", {"modules": false}], 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }]
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
