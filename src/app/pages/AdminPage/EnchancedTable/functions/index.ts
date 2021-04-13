interface ICreateData {
	(
		startData: string,
		fullname: string,
		email: string,
		role: string,
		status: string
	): {
		startData: string;
		fullname: string;
		email: string;
		role: string;
		status: string;
	};
}

export const createData: ICreateData = (
	startData,
	fullname,
	email,
	role,
	status
) => {
	return { startData, fullname, email, role, status };
};
