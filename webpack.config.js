module.exports = {
	entry: './js/block.js',
	output: {
		path: __dirname + '/js/',
		filename: 'index.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};