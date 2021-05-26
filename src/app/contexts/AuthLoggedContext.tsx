import React, { useState, createContext, useEffect } from 'react';
import { getAccess, fetchRequestLogin } from 'app/API/auth';
import IAuthLoggedContextState from '../pages/AuthPage/Auth/types/IAuthLoggedContextState';
import IAuthState from '../pages/AuthPage/Auth/types/IAuthState';
import IFormInput from '../pages/AuthPage/Auth/types/IFormInput';

const initAuthContext = {
	auth: {
		loading: true,
		dataLoginForm: null,
		dataRole: null,
		hasError: false,
	},
};
export const authContext = createContext<IAuthLoggedContextState>(
	initAuthContext
);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [auth, setAuth] = useState<IAuthState>(initAuthContext.auth);
	useEffect(() => {
		const authenticateRefresh = async () => {
			try {
				setAuth({
					loading: true,
					dataLoginForm: auth.dataLoginForm,
					dataRole: auth.dataRole,
					hasError: false,
				});

				const data = await getAccess();

				setAuth({
					loading: false,
					dataLoginForm: auth.dataLoginForm,
					dataRole: data,
					hasError: false,
				});
			} catch (error) {
				setAuth({
					loading: false,
					dataLoginForm: null,
					dataRole: null,
					hasError: false,
				});
			}
		};

		if (!auth.dataRole) {
			authenticateRefresh();
		}
	}, []);

	const logOut = () => {
		setAuth({
			loading: false,
			dataLoginForm: null,
			dataRole: null,
			hasError: false,
		});
	};

	const logIn = async (dataLogin: IFormInput) => {
		try {
			setAuth({
				loading: true,
				dataLoginForm: auth.dataLoginForm,
				dataRole: auth.dataRole,
				hasError: false,
			});

			const statusSever = await fetchRequestLogin(
				dataLogin.username,
				dataLogin.password
			);

			if (statusSever) {
				const data = await getAccess();

				setAuth({
					loading: false,
					dataLoginForm: dataLogin,
					dataRole: data,
					hasError: true,
				});
			}
		} catch (error) {
			setAuth({
				loading: false,
				dataLoginForm: auth.dataLoginForm,
				dataRole: auth.dataRole,
				hasError: true,
			});
		}
	};

	return (
		<authContext.Provider value={{ auth, logIn, logOut }}>
			{children}
		</authContext.Provider>
	);
};

export default AuthProvider;
