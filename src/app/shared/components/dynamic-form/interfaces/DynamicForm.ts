import type { DynamicFormField } from "./DynamicFormField"

export interface DynamicForm {
	title: string
	urlSave: string
	fields: DynamicFormField[]
}
