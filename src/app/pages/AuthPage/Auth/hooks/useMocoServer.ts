/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import axios from 'axios';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
import { IFormInput, IUseMocoServer } from '../types';

const useMocoServer = (): IUseMocoServer => {
	const { setIsLogged } = useContext(AuthLoggedContext);

	const url = 'https://recruitment-platform.herokuapp.com/login';

	const fetchRequestLogin = async ({ username, password }: IFormInput) => {
		const postUserData = axios.post(url, {
			username,
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
