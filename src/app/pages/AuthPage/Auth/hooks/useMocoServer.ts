import { useContext } from 'react';

import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
import { IFormInput } from '../types';

const useMocoServer = () => {
	const { setIsLogged } = useContext(AuthLoggedContext);

	const fetchRequestLogin = ({ email, password }: IFormInput) => {
		const userParam = { email, password };
		setIsLogged?.(true);
		localStorage.setItem('IsLoaded', 'true');
	};

	return { fetchRequestLogin };
};

export default useMocoServer;
