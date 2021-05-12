interface IUserInfo {
	readonly city?: string;
	readonly country?: string;
	readonly cv?: string;
	readonly email?: string;
	readonly englishLevel?: string;
	readonly firstName?: string;
	readonly id?: number;
	readonly internshipId?: number;
	interviews: Array<{
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
	}>;
	readonly lastName?: string;
	readonly otherInformation?: string;
	readonly phone?: string;
	readonly specialityId?: number;
}

export default IUserInfo;
