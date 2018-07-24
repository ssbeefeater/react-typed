const webpack = require('webpack');
const path = require('path');

const { UglifyJsPlugin } = webpack.optimize;

module.exports = {
    entry: {
        'react-typed': './src/index.js',
        'react-typed.min': './src/index.js',
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
        'styled-components': {
            commonjs: 'styled-components',
            commonjs2: 'styled-components',
            amd: 'styled-components',
        },
    },

    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        libraryTarget: 'umd',
        library: 'react-typed',
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false,
            },
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
