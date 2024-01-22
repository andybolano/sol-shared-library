import { RuleKey } from "../const/keyRules"

export interface DynamicFormField {
	type:
		| "text"
		| "email"
		| "password"
		| "number"
		| "textarea"
		| "select"
		| "checkbox"
		| "radio"
		| "phone"
		| "file"
		| "date"
		| "label"
		| "hidden"
	label: string
	name: string
	required?: boolean
	defaultValue?: string | number
	rules?: RuleKey[]
	canSetting?: boolean
	prefix?: string
	suffix?: string
	disabled?: boolean
}
