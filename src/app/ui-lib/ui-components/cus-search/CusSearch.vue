<template>
	<div class="cus-search" v-click-outside="handleClickOutside">
		<CusInput
			:id="id"
			:label="label"
			:placeholder="placeholder"
			:icon="'icon-search'"
			required
			@input="handleChange"
			v-model="value"
		/>
		<SearchResults
			:showList="showList"
			:textLoading="textLoading"
			:itemsResults="itemsResults"
			:isLoadingResults="isLoadingResults"
			@itemSelected="handleItemSelected"
		/>
	</div>
</template>
<script lang="ts" src="./CusSearch.ts"></script>
<style lang="scss" src="./CusSearch.scss" scoped></style>
