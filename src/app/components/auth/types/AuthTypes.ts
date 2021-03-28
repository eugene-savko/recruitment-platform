export interface ITypeData {
	status: number;
	data: {
		user: {
			name: string,
			password: string,
			role: string,
		},
	};
}

export interface IFormInputs {
	email: string;
	password: string;
	checkbox?: boolean;
}
