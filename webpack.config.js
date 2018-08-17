const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/')
    },
    resolve: {
        alias: { app: path.resolve(__dirname, 'src/') }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            }
        }]
    }
};
