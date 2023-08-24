const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rulesForJavaScript = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    options: {

        "presets": [
            [
                "@babel/preset-react",
                 {
                "runtime": "automatic" //classic
                }
            ]  
          ]
    }
    }
const rulesForStyles = {
    test:/\.s[ac]ss$/i,
    use: [
        //creates 'style' nodes from js strings
        "style-loader",
        "css-loader",
        "sass-loader",
    ]
}

const rulesSvg = {
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
        },
      }
    ]
}

const rulesImages = {
    test: /\.(pdf|png|jpe?g|gif|ico|ttf)$/i,
    use: [
          {
            loader: "file-loader",
            options: { name: "static/[hash].[ext]" },
          },
    ]
}



const rules = [rulesForJavaScript,rulesForStyles, rulesSvg, rulesImages]

module.exports = {
    // entry: './src/index.js'
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'public/index.html',
        title: 'portfolio',
    }
    )],
    devServer: {
        port: 3000,
        open: true,
    },

    devtool: "source-map",
}