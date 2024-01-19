const { ModuleFederationPlugin } = require("webpack").container
const path = require("path")

module.exports = {
	publicPath: "http://localhost:8081",
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	configureWebpack: {
		plugins: [
			new ModuleFederationPlugin({
				name: "uiLibrary",
				filename: "remoteEntry.js",
				exposes: {
					"./CusButton.vue":
						"./src/components/cus-button/CusButton.vue",
					"./CusInput.vue": "./src/components/cus-input/CusInput.vue",
					"./CusLabel.vue": "./src/components/cus-label/CusLabel.vue",
					"./CusHeader.vue":
						"./src/components/cus-header/CusHeader.vue",
					"./CusCard.vue": "./src/components/cus-card/CusCard.vue",
					"./CusMap.vue": "./src/components/cus-map/CusMap.vue",
					"./CusSearch.vue":
						"./src/components/cus-search/CusSearch.vue",
					"./mainStyle": path.resolve("src/assets/css/main.scss"),
				},
				shared: {
					vue: {
						eager: true,
						singleton: true,
					},
				},
			}),
		],
		optimization: {
			splitChunks: false,
		},
	},
}
