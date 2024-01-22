import { defineComponent } from "vue"
import { Table } from "ant-design-vue"

export default defineComponent({
	name: "CusTable",

	components: {
		Table,
	},

	props: {
		columns: { type: Array as () => Array<any>, default: () => [] },
		dataSource: { type: Array as () => Array<any>, default: () => [] },
	},
})
