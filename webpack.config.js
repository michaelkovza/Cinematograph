var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = require('./webpackConfig/pages.js');

const IS_PRODUCTION = (process.env.NODE_ENV === 'production');

const placeAssetsInFolder = (folder) => {
    return IS_PRODUCTION
        ? { name: `${folder}/[name].[ext]`, publicPath: './', limit: 1000 }
        : {};
};

const webpackConfig = {
    entry: {
        index: [ path.join(__dirname, 'src')]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: IS_PRODUCTION ? '' : '/',
        filename: '[name].js'
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devTool: 'inline-source-map',

    resolve: {
        root: [
            path.join(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.jsx', '.web.js', '.webpack.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            },
            {   test: /\.pug$/,
                loader: "pug-loader"
            },
            {
                test: /\.p?css$/,
                exclude: /node_modules/,
                loader: IS_PRODUCTION ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') : 'style-loader!css-loader?sourceMap!postcss-loader'
            },
            {
                test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                query: Object.assign({}, placeAssetsInFolder('fonts') )
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'application/font-woff' }, placeAssetsInFolder('fonts') )

            },
            {
                test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'application/octet-stream' }, placeAssetsInFolder('fonts') )
            },
            {
                test: /\.(jpe?g)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/jpeg' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.(png)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/png' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.(gif)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/gif' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.(svg)$/i,
                loader: 'url-loader',
                query: Object.assign({}, { mimetype: 'image/svg+xml' }, placeAssetsInFolder('images') )
            },
            {
                test: /\.html$/,
                loader: "html-loader?minimize=false"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    imageWebpackLoader: {
        mozjpeg: {
            quality: 65
        },
        pngquant:{
            quality: "65-90",
            speed: 4
        },
        svgo:{
            plugins: [
                {
                    removeViewBox: false
                },
                {
                    removeEmptyAttrs: false
                }
            ]
        }
    },
    postcss: function (webpack) {
        return [
            require('postcss-import'),
            require("postcss-url")({
                url: "rebase"
            }),
            require('postcss-nested'),
            require('postcss-calc'),
            require('postcss-mixins'),
            require('postcss-for'),
            require('postcss-each'),
            require('postcss-simple-vars')({
                silent: true
            }),
            require('postcss-custom-media'),
            require('postcss-custom-properties'),
            require('autoprefixer')({
                browsers: [
                    'last 3 versions',
                    'ie 9',
                    'ff 24',
                    'android 4.4',
                    'ios >= 5'
                ]
            })
        ];
    },
    plugins: [
        ...pages.map( page => new HtmlWebpackPlugin(page))
    ]
};

if (IS_PRODUCTION) {
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            beautify: true,
            sourceMap: false,
            warnings: false
        }),
        new ExtractTextPlugin('[name].css'),
        new CompressionPlugin({
            asset: '[file].gz',
            algorithm: 'gzip',
            regExp: /\.js$|\.css$|\.ttf$|\.svg$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new CopyWebpackPlugin([
            // {
            //     context: 'src/static/**',
            //     from: '**/*',
            //     to: 'static'
            // }
            {
                from: 'src/static/**',
                to: 'static',
                flatten: true
            }
        ])
    );
}
module.exports = webpackConfig;