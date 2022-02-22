const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: "ts-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css"
        })

    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "."),
        },
        compress: true,
        port: 3000
    }
};