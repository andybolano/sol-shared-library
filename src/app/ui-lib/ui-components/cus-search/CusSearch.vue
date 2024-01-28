<template>
	<div class="cus-search" v-click-outside="closeList">
		<CusInput
			:id="id"
			:label="label"
			:placeholder="placeholder"
			:icon="'icon-search'"
			required
			v-model="value"
		/>
		<div v-if="showList" class="cus-search__results">
			<h5 v-if="isLoadingResults" class="flashes">{{ textLoading }}</h5>
			<ul v-else-if="itemsResults.length > 0">
				<li
					v-for="(option, index) in itemsResults"
					:key="index"
					@click.stop="handleActiveOption(option)"
				>
					<slot name="option" :option="option"></slot>
				</li>
			</ul>
		</div>
	</div>
</template>
<script lang="ts" src="./CusSearch.ts"></script>
<style lang="scss" src="./CusSearch.scss" scoped></style>
