<template>
	<div v-if="isLoading" class="cus-loading">
		<i class="icon-loader rotating"></i>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { useLoading } from "@/app/shared/composables/Loading"

export default defineComponent({
	name: "CusLoading",
	setup() {
		const { isLoading } = useLoading()
		return {
			isLoading,
		}
	},
})
</script>
<style lang="scss" scoped>
.cus-loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba($color: #ffffff, $alpha: 0.7);
	z-index: 1000;

	i {
		font-size: 5rem;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.rotating {
		animation: rotate infinite 2s linear;
	}
}
</style>
