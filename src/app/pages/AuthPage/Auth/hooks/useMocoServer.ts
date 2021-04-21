/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import axios from 'axios';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
import { IFormInput, IUseMocoServer } from '../types';

const useMocoServer = (): IUseMocoServer => {
	const { setIsLogged } = useContext(AuthLoggedContext);

	const urlAPI = 'https://reqres.in/api/login';
	const url = 'https://recruitment-platform.herokuapp.com/login';

	const fetchRequestLogin = async ({ email, password }: IFormInput) => {
		const postUserData = axios.post(urlAPI, {
			email,
			password,
		});
		const token = await postUserData;

		if (token.status) {
			setIsLogged?.(true);
		}
	};

	return { fetchRequestLogin };
};

export default useMocoServer;
