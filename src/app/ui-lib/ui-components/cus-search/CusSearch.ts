import {
	SetupContext,
	computed,
	defineComponent,
	nextTick,
	ref,
	watch,
} from "vue"
import CusInput from "../cus-input/CusInput.vue"
import type { ItemType } from "./interfaces/ItemType"
import clickOutside from "@/app/shared/directives/ClickOutSide"

export default defineComponent({
	name: "CusSearch",
	components: {
		CusInput,
	},
	directives: {
		clickOutside,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			default: "",
		},
		required: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: "",
		},
		textLoading: {
			type: String,
			default: "Loading...",
		},
		itemsResults: {
			type: Array as () => ItemType[],
			default: () => [],
		},
		isLoadingResults: {
			type: Boolean,
			default: false,
		},
		modelValue: {
			type: String,
			required: true,
		},
	},
	setup(props, { emit }: SetupContext) {
		const value = computed({
			get() {
				return props.modelValue
			},
			set(value) {
				emit("update:modelValue", value)
			},
		})

		const showList = ref(false)

		const handleActiveOption = (option: ItemType) => {
			closeList()
			emit("changeOption", option)
		}

		const closeList = () => {
			showList.value = false
		}

		watch([() => props.isLoadingResults, () => props.itemsResults], () => {
			showList.value =
				props.isLoadingResults || props.itemsResults.length > 0
		})

		return {
			closeList,
			handleActiveOption,
			value,
			showList,
		}
	},
})
