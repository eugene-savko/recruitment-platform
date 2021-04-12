import { useContext /* useState */ } from 'react';
import axios, { AxiosResponse } from 'axios';
import { AuthContext } from 'app/context/AuthContext';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
import { IFormInput } from '../types';

const useMocoServer = () => {
	const { setDataFromServer } = useContext(AuthContext);
	const { setIsLogged } = useContext(AuthLoggedContext);

	const fetchRequestLogin = async ({ email, password }: IFormInput) => {
		const postUserData = axios.post('https://reqres.in/api/login', {
			email,
			password,
		});
		const token = await postUserData;

		if (token.status) getUserData();
		console.log(token);
	};

	const getUserData = async () => {
		const dataFetched: Promise<AxiosResponse> = axios.get(
			'https://reqres.in/api/users/'
		);
		const usersData: AxiosResponse<any> = await dataFetched;
		setDataFromServer?.(usersData.data.data[0]);
		setIsLogged?.(true);
	};

	return { fetchRequestLogin };
};

export default useMocoServer;
