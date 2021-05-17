interface IFeedbackInfo {
	id?: number;
	feedback?: string;
	englishLevel?: null | string;
	fromUser: {
		firstName?: string;
		id?: number;
		lastName?: string;
		role?: string;
	};
	startDateTime: number;
}

export default IFeedbackInfo;
