import dayjs from "dayjs"

const filters = {
	formatDate(value: string): string {
		return dayjs(value).format("MMM D, YYYY")
	},
}

export default filters
