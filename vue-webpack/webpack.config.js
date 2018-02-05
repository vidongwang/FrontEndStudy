var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: path.join(__dirname, 'src/main.js'),
    // entry: {
    //     path: path.resolve(__dirname, './src'),
    //     app: 'main.js'
    // },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}