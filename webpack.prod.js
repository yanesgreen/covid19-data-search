const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use:
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {loader: 'css-loader', options: {sourceMap: true}},
                            {loader: 'postcss-loader', options: {sourceMap: true}},
                            {loader: 'sass-loader', options: {sourceMap: true}}
                        ]
                    })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('./css/[name].css').replace('css/js', 'css');
            },
            allChunks: true
        })
    ]
});


