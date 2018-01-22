var path = require('path');
var webpak = require("webpack");
var TimestampWebpackPlugin = require("timestamp-webpack-plugin");

module.exports = {
	context: path.resolve('js'),
	entry: ["./utils", "./app"],
	output: {
		path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
		filename: "bundle.js"
	},
	devServer: {
		contentBase: 'public'
	},
	plugins:[
		new webpak.ProvidePlugin({
			$:"jquery",
			jQuery:"jquery",
			"window.jQuery":"jquery"
		}),

		new TimestampWebpackPlugin({
			path:__dirname,
			filename:"timestamp.json"
		}),

		new webpak.BannerPlugin("********** SERGIO ************************\nI'm your friend.")
	],

	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		extensions: ['.js', '.es6']
	}
}