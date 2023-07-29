const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
mode: "development",
entry: {
main: path.resolve(__dirname, "./src/index.html"),
},
//plugins:[new HtmlWebpackPlugin()],
plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
output: {
path: path.resolve(__dirname, "dist"),
filename: "main.js",
clean: true,
},

plugins:[
    new HtmlWebpackPlugin({
    template:"./src/index.html",
    title:"Webpack Generated File see the console",
    inject:"body"})]
};