<template>
	<div>
		<CusLabel
			v-if="labelText"
			:labelText="labelText"
			:isRequired="isRequired"
		/>
		<div class="input-container">
			<textarea
				v-if="type === 'textarea'"
				class="cus-input"
				:placeholder="placeholder"
				:value="modelValue"
				rows="5"
				cols="50"
				@input="handleChange"
			></textarea>
			<input
				v-else
				class="cus-input"
				:value="modelValue"
				:class="{ 'cus-input--icon': icon }"
				:type="type"
				:placeholder="placeholder"
				@input="handleChange"
			/>
			<i v-if="icon" :class="`icon ${icon}`"></i>
		</div>
	</div>
</template>
<script lang="ts" src="./CusInput.ts"></script>
<style lang="scss" src="./CusInput.scss" scoped></style>
