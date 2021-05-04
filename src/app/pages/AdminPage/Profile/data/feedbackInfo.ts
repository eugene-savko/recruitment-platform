import IFeedbackInfo from '../types/IFeedbackInfo';

const feedbackInfo: Array<IFeedbackInfo> = [
	{
		feedback: '',
		specialist: {
			firstName: 'Alice',
			lastName: 'Blue',
			role: 'SPECIALIST',
		},
		userTime: {
			startDateTime: 1619638200000,
		},
	},
	{
		feedback: 'Cool',
		specialist: {
			firstName: 'Tom',
			lastName: 'Green',
			role: 'RECRUITER',
		},
		userTime: {
			startDateTime: 1620021600100,
		},
	},
];

export default feedbackInfo;
