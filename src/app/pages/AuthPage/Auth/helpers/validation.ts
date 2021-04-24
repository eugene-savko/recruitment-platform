import IAuthValidation from '../types/IAuthValidation';

export const validation: IAuthValidation = {
	username: {
		required: 'Fill in the field',
		pattern: {
			value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			message: 'Incorrect mail',
		},
	},
	password: {
		required: 'Fill in the field',
		minLength: {
			value: 4,
			message: 'Minimum length 4 characters',
		},
	},
};
