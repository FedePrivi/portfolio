const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rulesForJavaScript = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic',
                },
            ],
        ],
    },
}

const rulesForStyles = {
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        'css-loader',
        {
            loader: 'sass-loader',
            options: {
                api: 'modern-compiler',
            },
        },
    ],
}

const rulesSvg = {
    test: /\.svg$/,
    use: [
        {
            loader: 'svg-url-loader',
            options: {
                limit: 10000,
            },
        },
    ],
}

const rulesImages = {
    test: /\.(pdf|png|jpe?g|gif|ico|ttf|woff2)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'static/[hash][ext][query]',
    },
}

const rules = [rulesForJavaScript, rulesForStyles, rulesSvg, rulesImages]

module.exports = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'portfolio',
        }),
    ],
    devServer: {
        port: 3000,
        open: true,
    },
    devtool: 'source-map',
}
