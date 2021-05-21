import IUserInfo from '../types/IUserInfo';

const userDefault: IUserInfo = {
	city: '',
	country: '',
	cv: '',
	email: '',
	englishLevel: '',
	firstName: '',
	id: 0,
	internship: '',
	interviews: [
		{
			englishLevel: null,
			feedback: '',
			fromUser: {
				firstName: '',
				id: 0,
				lastName: '',
				role: '',
			},
			id: 0,
			startDateTime: 0,
		},
		{
			englishLevel: null,
			feedback: '',
			fromUser: {
				firstName: '',
				id: 0,
				lastName: '',
				role: '',
			},
			id: 0,
			startDateTime: 0,
		},
	],
	lastName: '',
	otherInformation: '',
	phone: '',
	speciality: '',
};

export default userDefault;
