var htmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path")
var webpack = require("webpack")
module.exports = {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./src/app.js'
	],
	output:{
		path:__dirname + "/dist",
		filename:'js/webpack.js'
	},
	devServer:{
		hot:true
	},
	module:{
		loaders:[
			{
				test:/\.js$/,//匹配以js结尾的文件
				loader:"babel-loader",//es6转为es5的插件
				exclude:path.resolve(__dirname,"node_modules"),//在编译当中除了node_modules之外，其余的文件进行转码编译
				include:path.resolve(__dirname,"src")//指定固定文件夹中的js文件进行转码编译
			},
			{
				test:/\.css$/,//匹配以css结尾的文件
				loader:"style-loader!css-loader!postcss-loader"//加载css的插件，用来在js当中进行require
			},
			{
				test:/\.html$/,
				loader:"html-loader"
			},
			{
				test:/\.ejs$/,
				loader:"ejs-loader"
			},
			{
				test:/\.(jpg|png|gif|svg|jpeg)$/,
				loader:"file-loader"
			},
			{
				test:/\.less$/,
				loader:"less-loader"
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index.html",
			template:"index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
	
}
