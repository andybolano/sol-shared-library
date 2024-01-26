import { defineComponent } from "vue"
import { typeButton } from "./enums/ButtonType"

export default defineComponent({
	name: "CusButton",
	props: {
		value: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: typeButton.Primary,
		},
		icon: {
			type: String,
			required: false,
		},
	},
})
