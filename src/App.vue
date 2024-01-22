<template>
	<RouterView></RouterView>
</template>
<script lang="ts">
import solventoTheme from "./app/ui-lib/themes/solvento-theme"

export default {
	name: "App",
	setup() {
		const theme = solventoTheme
		Object.entries(theme).forEach(([key, value]) =>
			document.body.style.setProperty(`--${key}`, value)
		)

		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute("content", theme.primaryColor)
	},
}
</script>
