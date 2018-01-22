var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");								 

module.exports = {
	context: path.resolve('js'),
	entry: ["./app"],
	output: {
		//path: path.resolve('build/js/'),
		path: path.resolve('build/'),
		//publicPath: '/public/assets/js/',
		publicPath: '/public/assets/',
		filename: "bundle.js"
	},

	plugins:[
		new ExtractTextPlugin("styles.css")
	],

	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{//CSS
				test: /\.css$/,
				exclude: /node_modules/,
				//loader: "style-loader!css-loader"//(!):we are going to use two loaders.
				loader: ExtractTextPlugin.extract("style-loader","css-loader")
			}
			/*
			{//SASS
				test: /\.scss$/,
				exclude: /node_modules/,
				//loader: "style-loader!css-loader!sass-loader"
				loader: ExtractTextPlugin.extract("style-loader","css-loader","sass-loader")
			},
			{//LESS
				test: /\.less$/,
				exclude: /node_modules/,
				//loader: "style-loader!css-loader!less-loader"
				loader: ExtractTextPlugin.extract("style-loader","css-loader","less-loader")
			}
			*/
		]
	},

	resolve: {
		extensions: ['.js', '.es6']
	}
}