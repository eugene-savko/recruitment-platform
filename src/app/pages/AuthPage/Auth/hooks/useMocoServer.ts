/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
import { IFormInput } from '../types';

const useMocoServer = () => {
	const { setIsLogged } = useContext(AuthLoggedContext);
	const [isGettedToken, setIsGettedToken] = useState(false);

	const fetchRequestLogin = async ({ email, password }: IFormInput) => {
		const postUserData = axios.post('https://reqres.in/api/login', {
			email,
			password,
		});
		const token = await postUserData;

		if (token.status) {
			setIsGettedToken(true);
		}
	};

	useEffect(() => {
		setIsLogged?.(true);
		localStorage.setItem('IsLoaded', 'true');
	}, [isGettedToken]);

	return { fetchRequestLogin };
};

export default useMocoServer;
