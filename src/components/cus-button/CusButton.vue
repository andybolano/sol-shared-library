<template>
	<button class="cus-button" :class="`cus-button--${type}`">
		<i v-if="icon" :class="icon"></i> {{ value }}
	</button>
</template>

<script lang="ts" src="./CusButton.ts"></script>
<style lang="scss" src="./CusButton.scss" scoped></style>
