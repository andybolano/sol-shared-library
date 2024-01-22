import { ref } from "vue"

const isLoading = ref(false)

export function useLoading() {
	return {
		isLoading,

		startLoading() {
			isLoading.value = true
		},

		stopLoading() {
			isLoading.value = false
		},
	}
}
