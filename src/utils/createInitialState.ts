import { IForm } from '../types/forms.type'
export const createInitialState = (loginJson: IForm[]) => {
	let formObject = {}
	loginJson.forEach((form: IForm) => {
		formObject = {
			...formObject,
			[form.name]: '',
		}
	})
	return formObject
}
