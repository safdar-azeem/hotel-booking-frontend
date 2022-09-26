import React, { useState } from 'react'
import { InputOnChangeData } from 'semantic-ui-react'
import { IForm } from '../types/forms.type'

const useForm = (formJson: IForm[]) => {
	const [form, setForm] = useState({})

	React.useEffect(() => {
		formJson.forEach((formItem: IForm) => {
			setForm({
				...form,
				[formItem.name]: '',
			})
		})
	}, [formJson])

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		data: InputOnChangeData
	): void => {
		setForm({
			...form,
			[data.name]: data.value,
		})
	}

	return { form, handleChange }
}

export default useForm
