import React, { useState, createContext, useEffect } from 'react';
import IAuthLoggedContextState from '../pages/AuthPage/Auth/types/IAuthLoggedContextState';
import IAuthState from '../pages/AuthPage/Auth/types/IAuthState';
import IFormInput from '../pages/AuthPage/Auth/types/IFormInput';

const initAuthContext = {
	auth: { loading: true, data: null },
};

export const authContext = createContext<IAuthLoggedContextState>(
	initAuthContext
);

const AuthProvider: React.FunctionComponent<React.ReactNode> = ({
	children,
}) => {
	const [auth, setAuth] = useState<IAuthState>({ loading: true, data: null });

	const setAuthData = (data: IFormInput) => {
		setAuth({ loading: false, data });
	};

	useEffect(() => {
		setAuth({
			loading: false,
			data: JSON.parse(localStorage.getItem('currentUser') || '{}'),
		});
	}, []);

	useEffect(() => {
		window.localStorage.setItem('authData', JSON.stringify(auth.data));
	}, [auth.data]);

	return (
		<authContext.Provider value={{ auth, setAuthData }}>
			{children}
		</authContext.Provider>
	);
};

export default AuthProvider;
