const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: glob.sync("./src/*.js").reduce((entries, entry) => {
        return { ...entries, ...{ [entry.replace(/(\/src|\.js)/g, "")]: entry }};
    }, {}),
    output: {
        path: __dirname,
        filename: "dist/[name].js",
    },
    plugins: glob.sync("./src/*.js").map(entry => {
        return new HtmlWebpackPlugin({
            template: "template.html",
            chunks: [entry.replace(/(\/src|\.js)/g, "")],
            filename: `${entry.replace(/(\/src|\.js)/g, "")}.html`,
        })
    }),
};
