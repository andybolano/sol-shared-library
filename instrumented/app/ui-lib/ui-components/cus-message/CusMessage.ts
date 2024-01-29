import { message } from "ant-design-vue"

const CusMessage = () => {
	const success = (text: string) => {
		message.success(text)
	}
	const error = (text: string) => {
		message.error(text)
	}
	const warning = (text: string) => {
		message.warning(text)
	}
	return { success, error, warning }
}

export default CusMessage()
