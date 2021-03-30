interface ITypeData {
	status: number;
	data: {
		user: {
			name: string,
			password: string,
			role: string,
		},
	};
}

export default ITypeData;
