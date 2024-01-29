import CusLabel from "../cus-label/CusLabel.vue"
import { InputTypes } from "./enums/InputTypes"
import { SetupContext, defineComponent } from "vue"

export default defineComponent({
	extends: CusLabel,
	name: "CusInput",
	components: {
		CusLabel,
	},
	props: {
		labelText: {
			type: String,
			default: "",
		},
		modelValue: {
			type: [String, Number],
		},
		type: {
			type: String,
			default: InputTypes.Text,
		},
		placeholder: {
			type: String,
			required: false,
			default: "",
		},
		id: {
			type: String,
			required: false,
		},
		icon: {
			type: String,
			required: false,
		},
	},
	setup(_, { emit }: SetupContext) {
		const handleChange = (event: any) => {
			if (event.target) {
				emit("update:modelValue", event.target.value)
			}
		}

		return {
			handleChange,
		}
	},
})
