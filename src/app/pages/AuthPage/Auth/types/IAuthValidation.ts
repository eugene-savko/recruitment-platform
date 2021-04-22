interface IAuthValidation {
	username: {
		required: string;
		pattern: {
			value: RegExp;
			message: string;
		};
	};
	password: {
		required: string;
		minLength: {
			value: number;
			message: string;
		};
	};
}

export default IAuthValidation;
