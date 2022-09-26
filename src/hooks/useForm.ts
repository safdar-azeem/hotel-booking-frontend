import React, { useState } from 'react'
import { InputOnChangeData } from 'semantic-ui-react'
import { IForm, IFormState } from '../types/forms.type'

const useForm = (formJson: IForm[]) => {
	const getInitialState = () => {
		let formValues: IFormState = {}
		formJson.forEach((formItem: IForm) => {
			formValues[formItem.name] = {
				value: formItem?.value || '',
				error: '',
			}
		})
		return formValues
	}

	const [form, setForm] = useState<IFormState>(getInitialState)
	const [isValid, setIsValid] = useState<boolean>(false)

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		data: InputOnChangeData
	): void => {
		const formItem = formJson.find((item) => item.name === data.name)
		setForm({
			...form,
			[data.name]: {
				...form[data.name],
				value: data.value,
				error: data.value === '' && formItem?.ErrorMessage,
			},
		})
	}

	const doValidate = () => {
		let errors: IFormState = {}
		formJson.forEach((formItem: IForm) => {
			if (formItem.required && form && !form[formItem.name].value) {
				errors = {
					...errors,
					[formItem.name]: {
						value: form[formItem.name].value,
						error: form[formItem.name].value
							? ''
							: formItem.ErrorMessage,
					},
				}
			}
		})
		setForm({ ...form, ...errors })
		setIsValid(Object.keys(errors).length === 0)
	}

	const setFormError = (name: string, error?: string) => {
		const formItem = formJson.find((item) => item.name === name)
		const formItemError = error || formItem?.ErrorMessage || ''
		const newForm: IFormState = { ...form }
		newForm[name] = {
			...newForm[name],
			error: formItemError,
		}
		setForm(newForm)
	}

	return { form, handleChange, doValidate, isValid, setFormError }
}

export default useForm
