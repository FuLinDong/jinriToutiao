var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

const Babiliplugin = require("babili-webpack-plugin");//压缩插件

module.exports = {
	devServer: {
		historyApiFallback: true,
	}
	,
//	performance:{
//		hints: "warning",
//		maxEntrypointSize: 100000,
//		maxAssetSize: 450000,
//	},
  context: path.join(__dirname),
//devtool: debug ? "inline-sourcemap" : null,
  devtool: "source-map",
  entry: {
  	app: "./src/js/root.js",
  	vendor: ["react"]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path: __dirname,
    filename: "[name].js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new Babiliplugin(),
    new webpack.optimize.CommonsChunkPlugin({
    	name: "vendor",
    })
  ],
};
