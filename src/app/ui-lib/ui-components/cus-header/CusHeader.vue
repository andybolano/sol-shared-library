<template>
	<div class="cus-header">
		<div class="cus-header__title">
			<slot name="title"></slot>
		</div>
		<div class="cus-header__options">
			<slot name="options"> </slot>
		</div>
	</div>
</template>
<script lang="ts" src="./CusHeader.ts"></script>
<style lang="scss" src="./CusHeader.scss" scoped></style>
