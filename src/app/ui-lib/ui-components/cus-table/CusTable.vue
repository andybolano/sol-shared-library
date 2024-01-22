<template>
	<Table :data-source="dataSource" :columns="columns">
		<template #bodyCell="{ column, record }">
			<slot name="bodyCell" :column="column" :item="record"></slot>
		</template>
	</Table>
</template>

<script lang="ts" src="./CusTable.ts"></script>
<style lang="scss" src="./CusTable.scss" scoped></style>
