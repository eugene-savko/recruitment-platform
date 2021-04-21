/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useCallback, useEffect } from 'react';

import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
import { IFormInput } from '../types';

const useMocoServer = () => {
	const { setIsLogged } = useContext(AuthLoggedContext);

	const fetchRequestLogin = useCallback(({ email, password }: IFormInput) => {
		setIsLogged?.(true);
		localStorage.setItem('IsLoaded', 'true');
	}, []);

	return { fetchRequestLogin };
};

export default useMocoServer;
