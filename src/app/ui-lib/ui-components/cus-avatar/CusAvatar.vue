<template>
	<Avatar
		:size="size"
		shape="square"
		:style="{
			backgroundColor: backgroundColor,
			verticalAlign: 'middle',
			color: color,
		}"
	>
		{{ letter }}
	</Avatar>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue"
import { Avatar } from "ant-design-vue"
import { paletteColors } from "../../themes/blue-theme"

export default defineComponent({
	name: "CusAvatar",
	components: {
		Avatar,
	},
	props: {
		name: { type: String, required: true },
		staticColor: {
			type: Boolean,
			default: true,
			required: false,
		},
		size: {
			type: Number,
			required: false,
			default: 42,
		},
	},
	setup(props: { name: string; staticColor: boolean }) {
		const name = ref(props.name)

		const getColor = (): string => {
			const colors = paletteColors
			return colors[Math.floor(Math.random() * colors.length)]
		}

		const backgroundColor = props.staticColor
			? document.body.style
					.getPropertyValue(`--primaryColor`)
					.replace("rgb", "rgba")
					.replace(")", ", 0.2)")
			: getColor()

		const color = props.staticColor
			? document.body.style.getPropertyValue(`--primaryColor`)
			: "#FFFFFF"

		const letter = name.value.substr(0, 1)

		return {
			color,
			backgroundColor,
			letter,
		}
	},
})
</script>
<style lang="scss" scoped>
.ant-avatar {
	border-radius: 100%;
}
</style>
