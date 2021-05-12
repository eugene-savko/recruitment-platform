import IUserInfo from '../types/IUserInfo';

const userDefault: IUserInfo = {
	city: '',
	country: '',
	cv: '',
	email: '',
	englishLevel: '',
	firstName: '',
	id: 0,
	internshipId: 0,
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
	specialityId: 0,
};

export default userDefault;
