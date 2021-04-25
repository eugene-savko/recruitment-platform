import { IInitStateMain } from 'app/types';

export const dataQA: IInitStateMain = {
	firstName: 'Ann',
	lastName: 'Green',
	cv: 'www.somesite.com',
	englishLevel: 'B1',
	email: 'ann@gmail.com',
	internship: 'JavaScriptAndJava',
	primarySkill: 'JavaScript',
	country: 'Spain',
	city: 'Minsk',
	phone: '',
	otherInformation: 'Other info',
	statusCandidate: {
		noInterview: true,
		interviewRecruiter: false,
		finishedRecruiter: false,
		interviewTechSpecialist: false,
		finishedInterviewTechSpecialist: false,
		approwedAdmin: false,
	},
};
