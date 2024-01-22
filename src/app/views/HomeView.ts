import type { ItemType } from "../ui-lib/ui-components/cus-search/interfaces/ItemType"
import { defineComponent } from "vue"
import {
	CusButton,
	CusInput,
	CusLabel,
	CusHeader,
	CusCard,
	CusMap,
	CusSearch,
	CusLoading,
} from "../ui-lib/ui-components"
import { useLoading } from "../shared/composables/Loading"

export default defineComponent({
	name: "HomeView",
	components: {
		CusButton,
		CusInput,
		CusLabel,
		CusHeader,
		CusCard,
		CusMap,
		CusSearch,
		CusLoading,
	},

	setup() {
		const { startLoading, stopLoading } = useLoading()
		const timeForHideLoading = 2000
		startLoading()

		setTimeout(() => {
			stopLoading()
		}, timeForHideLoading)

		return {
			itemsResults: [
				{
					id: "0",
					name: "Item 1",
				},
				{
					id: "1",
					name: "Item 2",
				},
			],
			handleItemSelected: (item: ItemType) => {
				console.log(item)
			},
		}
	},
})
