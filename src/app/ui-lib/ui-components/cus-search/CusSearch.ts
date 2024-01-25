import { SetupContext, defineComponent, ref, watch } from "vue"
import CusInput from "../cus-input/CusInput.vue"
import SearchResults from "./components/SearchResults.vue"
import type { ItemType } from "./interfaces/ItemType"
import clickOutside from "../../../shared/directives/ClickOutSide"

export default defineComponent({
	name: "CusSearch",
	components: {
		CusInput,
		SearchResults,
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
			type: [String, Number],
		},
	},
	setup(props, { emit }: SetupContext) {
		const value = ref(props.modelValue)
		const showList = ref(false)
		const handleItemSelected = (item: ItemType) => {
			value.value = item.name
			emit("itemSelected", item)
		}

		const handleChange = (event: any) => {
			if (event.target) {
				emit("update:modelValue", event.target.value)
			}
		}

		const handleClickOutside = () => {
			showList.value = false
		}

		watch(
			() => props.modelValue,
			(newValue, oldValue) => {
				value.value = newValue
				showList.value = oldValue
					? props.isLoadingResults || props.itemsResults.length > 0
					: false
			}
		)

		return {
			handleClickOutside,
			handleItemSelected,
			handleChange,
			value,
			showList,
		}
	},
})
