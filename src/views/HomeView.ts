import { ItemType } from "./../components/cus-search/interfaces/ItemType"
import { defineComponent } from "vue"
import {
	CusButton,
	CusInput,
	CusLabel,
	CusHeader,
	CusCard,
	CusMap,
	CusSearch,
} from "../components"

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
	},

	setup() {
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
