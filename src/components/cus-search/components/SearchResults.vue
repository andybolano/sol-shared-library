<template>
	<div v-if="isLoadingResults">
		<h5>{{ textLoading }}</h5>
	</div>
	<ul v-else-if="itemsResults.length > 0">
		<li
			v-for="item in itemsResults"
			:key="item.id"
			@click="onClicked(item)"
		>
			<p>{{ item.name }}</p>
		</li>
	</ul>
</template>
<script lang="ts" src="./SearchResults.ts"></script>
<style lang="scss" src="./SearchResults.scss" scoped></style>
