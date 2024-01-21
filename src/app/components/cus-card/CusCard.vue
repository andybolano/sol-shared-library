<template>
	<div class="cus-card">
		<div v-if="title" class="cus-card__title">
			{{ title }}
		</div>
		<div class="cus-card__body" :class="{ 'cus-card__body--title': title }">
			<slot name="body"> </slot>
		</div>
	</div>
</template>
<script lang="ts" src="./CusCard.ts"></script>
<style lang="scss" src="./CusCard.scss" scoped></style>
