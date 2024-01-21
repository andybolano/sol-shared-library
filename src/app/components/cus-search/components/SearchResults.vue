<template>
	<div v-if="isLoadingResults || items.length > 0" class="search-result">
		<h5 v-if="isLoadingResults" class="flashes">{{ textLoading }}</h5>
		<ul v-else-if="items.length > 0">
			<li v-for="item in items" :key="item.id" @click="onClicked(item)">
				<p>{{ item.name }}</p>
			</li>
		</ul>
	</div>
</template>
<script lang="ts" src="./SearchResults.ts"></script>
<style lang="scss" src="./SearchResults.scss" scoped></style>
