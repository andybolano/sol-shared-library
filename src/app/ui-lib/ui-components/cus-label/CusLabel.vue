<template>
	<div class="cus-label">
		<p :class="type">{{ labelText }}</p>
		<span v-if="isRequired">*</span>
	</div>
</template>
<script lang="ts" src="./CusLabel.ts"></script>
<style lang="scss" src="./CusLabel.scss" scoped></style>
