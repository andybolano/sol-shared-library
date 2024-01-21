import CusLabel from "../cus-label/CusLabel.vue"
import { InputTypes } from "./enums/InputTypes"
import { SetupContext, defineComponent } from "vue"

export default defineComponent({
	name: "CusInput",
	components: {
		CusLabel,
	},
	props: {
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
		label: {
			type: String,
			required: false,
			default: "",
		},
		required: {
			type: Boolean,
			required: false,
			default: false,
		},
		id: {
			type: String,
			required: true,
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
