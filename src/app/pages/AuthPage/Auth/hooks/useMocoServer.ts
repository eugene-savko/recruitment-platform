import { useContext, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { AuthContext } from 'app/context/AuthContext';
import { IFormInput } from '../types';

const useMocoServer = () => {
	const { setDataFromServer } = useContext(AuthContext);

	const [isAuth, setIsAuth] = useState(false);

	const fetchRequestLogin = async ({ email, password }: IFormInput) => {
		const postUserData = axios.post('https://reqres.in/api/login', {
			email,
			password,
		});

		const token = await postUserData;

		if (token.data) getUserData();
	};

	const getUserData = async () => {
		const dataFetched: Promise<AxiosResponse> = axios.get(
			'https://reqres.in/api/users/'
		);
		const usersData: AxiosResponse<any> = await dataFetched;
		setDataFromServer(usersData.data.data[1]);
		setIsAuth(true);
	};

	return { isAuth, setIsAuth, fetchRequestLogin };
};

export default useMocoServer;
