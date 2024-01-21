const { ModuleFederationPlugin } = require("webpack").container
const path = require("path")

module.exports = {
	publicPath: process.env.VUE_APP_PUBLIC_PATH || "/",
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
						"./src/app/components/cus-button/CusButton.vue",
					"./CusInput.vue":
						"./src/app/components/cus-input/CusInput.vue",
					"./CusLabel.vue":
						"./src/app/components/cus-label/CusLabel.vue",
					"./CusHeader.vue":
						"./src/app/components/cus-header/CusHeader.vue",
					"./CusCard.vue":
						"./src/app/components/cus-card/CusCard.vue",
					"./CusMap.vue": "./src/app/components/cus-map/CusMap.vue",
					"./CusSearch.vue":
						"./src/app/components/cus-search/CusSearch.vue",
					"./mainStyle": path.resolve("src/assets/css/main.scss"),
					"./apiClient": path.resolve("src/app/api-client/api"),
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
