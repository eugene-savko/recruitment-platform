import { IUserInfo } from 'app/pages/AdminPage/Profile/types';

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
			startDateTime: null,
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
			startDateTime: null,
		},
	],
	lastName: '',
	otherInformation: '',
	phone: '',
	speciality: '',
};

export default userDefault;
