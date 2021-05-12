interface IFeedbackInfo {
	id?: number;
	feedback?: string;
	englishLevel?: null;
	fromUser: {
		firstName?: string;
		id?: number;
		lastName?: string;
		role?: string;
	};
	startDateTime?: number;
}

export default IFeedbackInfo;
