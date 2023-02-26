const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    mode: "none",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png)$/i,
                type: "asset/resource",
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public/assets/js"),
    },
};