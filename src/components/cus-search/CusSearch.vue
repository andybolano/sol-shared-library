<template>
	<div class="cus-search">
		<CusInput :label="label" :placeholder="placeholder" v-model="value" />
		<SearchResults
			:textLoading="isLoadingResults"
			:itemsResults="itemsResults"
			:isLoadingResults="isLoadingResults"
			@itemSelected="handleItemSelected"
		/>
	</div>
</template>
<script lang="ts" src="./CusSearch.ts"></script>
<style lang="scss" src="./CusSearch.scss" scoped></style>
