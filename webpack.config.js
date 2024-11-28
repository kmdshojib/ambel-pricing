const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: {
      index: '/public/index.html'
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "ambel_pricing",
      filename: "remoteEntry.js",
      remotes: {
        ambel_home: "ambel_home@http://localhost:3000/remoteEntry.js"
      },
      shared: {
        tailwindcss: {
          singleton: true,
          requiredVersion: false,
        },
        autoprefixer: {
          singleton: true,
          requiredVersion: false,
        },
        postcss: {
          singleton: true,
          requiredVersion: false,
        },
        
      }
    })
  ]
};
