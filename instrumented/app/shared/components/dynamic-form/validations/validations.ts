export const onlyText = (value: string): boolean => {
	return /^[A-Za-z\s]+$/.test(value)
}

export const onlyNumber = (value: string): boolean => {
	return /^[0-9]+$/.test(value)
}

export const email = (value: string): boolean => {
	return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
}
