<template>
	<div class="input-container">
		<CusLabel v-if="label" :text="label" :isRequired="required" />
		<textarea
			v-if="type === 'textarea'"
			class="cus-input"
			:placeholder="placeholder"
			:value="modelValue"
			rows="5"
			cols="50"
		></textarea>
		<input
			v-else
			class="cus-input"
			:value="modelValue"
			:class="{ 'cus-input--icon': icon }"
			:type="type"
			:placeholder="placeholder"
			@change="handleChange"
		/>
		<i v-if="icon" :class="`icon ${icon}`"></i>
	</div>
</template>
<script lang="ts" src="./CusInput.ts"></script>
<style lang="scss" src="./CusInput.scss" scoped></style>
