<template>
	<form class="dynamic-form">
		<template v-for="field in formFields" :key="field.name">
			<CusLabel
				v-if="field.type === 'label'"
				:text="field.label"
				type="title"
			/>
			<CusInput
				v-if="
					[
						'text',
						'email',
						'password',
						'number',
						'phone',
						'textarea',
					].includes(field.type)
				"
				:type="field.type"
				:name="field.name"
				:required="field.required"
				:label="field.label"
				:prefix="field.prefix"
				:suffix="field.suffix"
				:disabled="field.disabled"
				v-model="formDataState[field.name]"
			/>

			<span
				class="dynamic-form__message"
				v-if="validate$[field.name].$invalid"
			>
				{{ getErrorMessage(field.name) }}
			</span>
		</template>
	</form>
</template>

<script lang="ts" src="./DynamicForm.ts"></script>
<style lang="scss" src="./DynamicForm.scss" scoped></style>
