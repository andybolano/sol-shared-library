import { defineComponent } from "vue"
import { typeButton } from "./enums/ButtonType"

export default defineComponent({
	name: "CusButton",
	props: {
		value: String,
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
