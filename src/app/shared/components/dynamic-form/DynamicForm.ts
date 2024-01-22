import {
	PropType,
	Ref,
	SetupContext,
	defineComponent,
	onMounted,
	reactive,
	watch,
} from "vue"
import { CusInput, CusLabel } from "@/app/ui-lib/ui-components"
import type { DynamicFormData } from "./interfaces/DynamicFormData"
import { Validation, useVuelidate } from "@vuelidate/core"
import { helpers, required } from "@vuelidate/validators"
import { DynamicFormField } from "./interfaces/DynamicFormField"
import { onlyText, onlyNumber, email } from "./validations/validations"
import { errorMessages } from "./const/ErrorMessages"
import { RuleKey } from "./const/keyRules"
import { Rules } from "./public-api"

export default defineComponent({
	name: "DynamicForm",
	components: {
		CusInput,
		CusLabel,
	},
	props: {
		formFields: {
			type: Array as PropType<DynamicFormField[]>,
			required: true,
		},
		isEdit: {
			type: Boolean,
			default: false,
		},
		initialData: {
			type: Object,
			required: false,
		},
	},
	setup(props, { emit, expose }: SetupContext) {
		const rules: Record<string, Record<string, Validation>> = {}

		const setValidations = (
			field: DynamicFormField
		): Record<string, Validation> => {
			const validation: Record<string, Validation> = {}
			field.rules?.forEach((rule: RuleKey) => {
				validation[rule] = getRule(rule)
			})

			return validation
		}

		const getRule = (rule: RuleKey): any => {
			switch (rule) {
				case Rules.OnlyText:
					return helpers.withMessage(
						errorMessages[Rules.OnlyText],
						onlyText
					)
				case Rules.Required:
					return helpers.withMessage(
						errorMessages[Rules.Required],
						required
					)
				case Rules.OnlyNumber:
					return helpers.withMessage(
						errorMessages[Rules.OnlyNumber],
						onlyNumber
					)
				case Rules.Email:
					return helpers.withMessage(
						errorMessages[Rules.Email],
						email
					)
				default:
					return {}
			}
		}

		const loadValidations = () => {
			props.formFields.forEach((field: DynamicFormField) => {
				rules[field.name] = setValidations(field)
			})
		}

		const initializeForm = (): DynamicFormData => {
			const formData: DynamicFormData = {}

			if (props.isEdit && props.initialData) {
				Object.entries(props.initialData).forEach(([key, value]) => {
					formData[key] = value || ""
				})
			} else {
				props.formFields.forEach((field: DynamicFormField) => {
					formData[field.name] = field.defaultValue || ""
				})
			}
			return formData
		}

		const formDataState = reactive<DynamicFormData>(initializeForm())
		loadValidations()
		const validate$: Ref<Validation> = useVuelidate(rules, formDataState)

		const getErrorMessage = (fieldName: string): string => {
			let message = ""
			if (!rules[fieldName]) {
				return message
			}

			Object.keys(rules[fieldName]).forEach((key) => {
				if (validate$.value[fieldName][key].$invalid) {
					message = validate$.value[fieldName][key].$message
				}
			})

			return message
		}

		const handleSubmit = (): void => {
			if (validate$.value.$invalid) {
				return
			}
			emit("formData", {
				data: formDataState,
				isValid: !validate$.value.$invalid,
			})
		}

		const resetForm = (): void => {
			props.formFields.forEach((field: DynamicFormField) => {
				formDataState[field.name] = field.defaultValue || ""
			})
			validate$.value.$reset()
		}

		expose({
			resetForm,
		})

		onMounted(() => {
			handleSubmit()
		})

		watch(
			() => validate$.value,
			(value): void => {
				if (value.$invalid) {
					return
				}

				handleSubmit()
			}
		)

		return {
			formDataState,
			validate$,
			handleSubmit,
			getErrorMessage,
		}
	},
})
