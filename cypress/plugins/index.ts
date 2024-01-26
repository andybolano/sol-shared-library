export default async (on: any, config: any): Promise<any> => {
	await import("@cypress/code-coverage/task").then((coverageTask) => {
		coverageTask.default(on, config)
	})

	await import("@cypress/code-coverage/use-babelrc").then((useBabelrc) => {
		on("file:preprocessor", useBabelrc.default)
	})

	return config
}
