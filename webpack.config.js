const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { cache } = require('webpack')
// const { Template } = require('webpack')

const rulesForJavaScript = {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    options: {

        // "presets" : ["@babel/preset-react"]
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
        // template: 'src/index.html',
        template: 'public/index.html',
        title: 'portfolio',
    }
    )],
    devServer: {
        port: 3000,
        open: true,
    },

    // cache: false,   //Porque al realizar cambios aveces webpack no lo detecta; Lo malo es que no renderiza lo necesario sino que al realizar algun cambio y guardar renderiza todo el sitio.
                   //https://github.com/webpack/webpack-dev-server/issues/2802  
                    //https://webpack.js.org/configuration/cache/

    devtool: "source-map",
}