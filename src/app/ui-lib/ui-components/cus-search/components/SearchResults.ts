import { SetupContext, defineComponent, ref, watch } from "vue"
import type { ItemType } from "../interfaces/ItemType"

export default defineComponent({
	name: "SearchResults",
	props: {
		showList: {
			type: Boolean,
			default: false,
		},
		isLoadingResults: {
			type: Boolean,
			default: false,
		},
		textLoading: {
			type: String,
			default: "Loading...",
		},
		itemsResults: {
			type: Array as () => ItemType[],
			default: () => [],
		},
	},
	setup(props, { emit }: SetupContext) {
		const items = ref<ItemType[]>([])
		watch(
			() => props.itemsResults,
			(newItems: ItemType[]) => {
				items.value = newItems
			}
		)

		const onClicked = (item: ItemType) => {
			items.value = []
			emit("itemSelected", item)
		}

		return {
			items,
			onClicked,
		}
	},
})