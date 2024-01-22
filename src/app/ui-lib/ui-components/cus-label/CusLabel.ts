import { defineComponent } from "vue"

export default defineComponent({
	name: "CusLabel",
	props: {
		text: {
			type: String,
			required: true,
		},
		isRequired: {
			type: Boolean,
			default: false,
		},
		type: {
			type: String,
			default: "normal",
		},
	},
})
