// webpack plugins
const SplitChunksPlugin = require("webpack/lib/optimize/SplitChunksPlugin");

module.exports = {
  module: {
    loaders: [{ test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }]
  },

  entry: {
    app: ["./src/bootstrap.js"],
    vendor: "./src/vendor.js"
  },

  resolve: {
    extensions: [".js", ".scss"],

    modules: ["node_modules"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },

      {
        type: "javascript/auto",
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          publicPath: "/"
        }
      },

      {
        test: /\.(mp4|webm)$/,
        loader: "url?limit=10000"
      }
    ]
  },

  plugins: [
    new SplitChunksPlugin({
      name: ["app", "vendor"],
      minChunks: Infinity
    })
  ]
};
