const path = require('path')

const plugins = []

const config = {

    context: path.resolve(__dirname, './src'),

    entry: {
        index: './index.js',
    },

    output: {
        filename: '[name].js',
        path:  path.resolve(__dirname, './lib'),

        library: 'ReactNativeComponent',
        libraryTarget: 'umd',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    'babel-loader',
                    'source-map-loader',
                ],
            },
			{
				test: /\.json$/,
				use: ["json-loader"],
				exclude: /(node_modules)/,
			},
			{
				test: /\.(svg)$/,
				use: ['raw-loader'],
				// exclude: /(node_modules)/,
			}
        ]

    },
	resolve: {
		alias: {
			'react-native$': 'react-native-web'
		}
	},
    plugins,
}

module.exports = config
