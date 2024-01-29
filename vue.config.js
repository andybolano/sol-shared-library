const { ModuleFederationPlugin } = require("webpack").container
const path = require("path")

module.exports = {
	publicPath: process.env.VUE_APP_PUBLIC_PATH || "/",
	devServer: {
		hot: false,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	configureWebpack: {
		plugins: [
			new ModuleFederationPlugin({
				name: "sharedLibrary",
				filename: "remoteEntry.js",
				exposes: {
					"./CusAvatar.vue":
						"./src/app/ui-lib/ui-components/cus-avatar/CusAvatar.vue",
					"./CusButton.vue":
						"./src/app/ui-lib/ui-components/cus-button/CusButton.vue",
					"./CusInput.vue":
						"./src/app/ui-lib/ui-components/cus-input/CusInput.vue",
					"./CusLabel.vue":
						"./src/app/ui-lib/ui-components/cus-label/CusLabel.vue",
					"./CusHeader.vue":
						"./src/app/ui-lib/ui-components/cus-header/CusHeader.vue",
					"./CusCard.vue":
						"./src/app/ui-lib/ui-components/cus-card/CusCard.vue",
					"./CusMap.vue":
						"./src/app/ui-lib/ui-components/cus-map/CusMap.vue",
					"./CusSearch.vue":
						"./src/app/ui-lib/ui-components/cus-search/CusSearch.vue",
					"./CusTable.vue":
						"./src/app/ui-lib/ui-components/cus-table/CusTable.vue",
					"./CusLoading.vue":
						"./src/app/ui-lib/ui-components/cus-loading/CusLoading.vue",
					"./mainStyle": path.resolve("./src/assets/css/main.scss"),
					"./CusMessage": path.resolve(
						"./src/app/ui-lib/ui-components/cus-message/CusMessage"
					),
					"./useLoading": path.resolve(
						"./src/app/shared/composables/Loading.ts"
					),
					"./apiClient": path.resolve("./src/app/api-client/api"),
					"./filters": path.resolve(
						"./src/app/ui-lib/helpers/filters"
					),
				},
				shared: {
					vue: {
						eager: false,
						singleton: true,
						requiredVersion: "3.4.14",
					},
				},
			}),
		],
		optimization: {
			splitChunks: false,
		},
	},

	chainWebpack: (config) => {
		config.resolve.extensions.add(".js").add(".vue").add(".json")

		config.module
			.rule("vue")
			.test(/\.vue$/)
			.use("vue-loader")
			.loader("vue-loader")
			.end()
	},
}
