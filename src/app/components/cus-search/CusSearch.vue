<template>
	<div class="cus-search">
		<CusInput
			:id="id"
			:label="label"
			:placeholder="placeholder"
			@input="handleChange"
			v-model="value"
		/>
		<SearchResults
			:textLoading="textLoading"
			:itemsResults="itemsResults"
			:isLoadingResults="isLoadingResults"
			@itemSelected="handleItemSelected"
		/>
	</div>
</template>
<script lang="ts" src="./CusSearch.ts"></script>
<style lang="scss" src="./CusSearch.scss" scoped></style>
