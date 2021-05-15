import IFeedbackInfo from './IFeedbackInfo';

interface IUserInfo {
	readonly city?: string;
	readonly country?: string;
	readonly cv?: string;
	readonly email?: string;
	readonly englishLevel?: string;
	readonly firstName?: string;
	readonly id?: number;
	readonly internshipId?: number;
	interviews: Array<IFeedbackInfo>;
	readonly lastName?: string;
	readonly otherInformation?: string;
	readonly phone?: string;
	readonly specialityId?: number;
}

export default IUserInfo;
