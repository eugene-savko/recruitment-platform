import IFeedbackInfo from './IFeedbackInfo';

interface IUserInfo {
	readonly city?: string;
	readonly country?: string;
	readonly cv?: string;
	readonly email?: string;
	readonly englishLevel?: string;
	firstName?: string;
	readonly id?: number;
	readonly internship?: string;
	interviews: Array<IFeedbackInfo>;
	lastName?: string;
	readonly otherInformation?: string;
	readonly phone?: string;
	readonly speciality?: string;
}

export default IUserInfo;
