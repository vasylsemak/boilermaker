module.exports = {
  entry: ["@babel/polyfill", "./client/index.js"],
  mode: "development",
  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: "./public/bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
