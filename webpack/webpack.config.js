
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const glob = require('glob');
const purifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const entry = require('./webpack_config/entry_webpack.js');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    //入口文件配置项
    entry: entry,
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:8081/'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:[{
                    loader:'css-loader',
                    options:{
                        importLoaders:1
                    }
                },'postcss-loader']
            })
        },{
            test:/\.(png|jpg|gif)$/,
            use:{
                loader:'url-loader',
                options:{
                    limit:50000,
                    outputPath:'images/'
                }
            }
        },{
            test:/\.(htm|html)$/i,
            use:{
                loader:'html-withimg-loader'
            }
        },{
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
                use:[{
                    loader:'css-loader'
                },{
                    loader:'sass-loader'
                }],
                fallback:'style-loader'
            })
        },{
            test:/\.(js|jsx)$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:[
                        'env','react'
                    ]
                }
            },
            exclude:/node_modules/
        }]
    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributoQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin('css/index.css'),
        // new UglifyJsPlugin()
        new purifyCSSPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        new webpack.BannerPlugin('翻版必究'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue'],
            filename:'./assets/js/[name].js',
            minChunks:2
        }),
        new CopyPlugin([{
            from:__dirname + '/src/public',
            to:__dirname + '/dist/public'
        }])
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081',
        compress:true
    },
    watchOptions:{
        poll:1000,
        aggregateTimeout:500,
        ignored:/node_modules/,
    }

}