import IAuthValidation from '../types/IAuthValidation';

export const validation: IAuthValidation = {
	email: {
		required: 'Заполните поле',
		pattern: {
			value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			message: 'Неподходящая электронная почта',
		},
	},
	password: {
		required: 'Заполните поле',
		minLength: {
			value: 6,
			message: 'Минимальная длина 6 символов',
		},
	},
};
