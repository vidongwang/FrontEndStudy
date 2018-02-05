var path = require('path')
var webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
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
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                use: {
                    loader:'url-loader',
                    options: {
                        limit: 1024,
                        name: 'img/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        // new htmlWebpackPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        })
    ]
}

if(isDev){
    config.devtool = '#cheap-module-eval-source-map'    // 源代码显示
    config.devServer = {
        port: '8016',
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        // open: true,
        // historyFallback: {},
        hot: true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config