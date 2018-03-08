var path = require('path');

module.exports = {
    mode: "development",
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, '../webapp/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.(ttf|woff|woff2|eot|svg|png|jpg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "app"),
            path.resolve(__dirname, "css"),
            "node_modules"
        ]
    }

};

