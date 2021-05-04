interface IFeedbackInfo {
	feedback?: string | null;
	specialist: {
		firstName: string;
		lastName: string;
		role: string;
	};
	userTime: {
		startDateTime: number;
	};
}

export default IFeedbackInfo;
