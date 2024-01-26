import { defineConfig } from "cypress"

export default defineConfig({
	component: {
		devServer: {
			framework: "vue-cli",
			bundler: "webpack",
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			import("@cypress/code-coverage/task").then((coverageTask) => {
				coverageTask.default(on, config)
			})
			return config
		},
	},
})
