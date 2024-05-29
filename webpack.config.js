const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
                exclude: /node_modules\/(?!@react-stately)/,
            },
        ],
    },
};
