import { defineComponent } from "vue"

export default defineComponent({
	name: "CusCard",
	props: {
		title: {
			type: String,
			required: false,
		},
	},
})
