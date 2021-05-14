import axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';
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

	const getAccess = async () => {
		const { data } = await axios({
			method: 'get',
			url: 'https://recruitment-platform.herokuapp.com/users/current',
			withCredentials: true,
		});
		return data;
	};

	const fetchRequestLogin = async (username: string, password: string) => {
		const { status } = await axios({
			method: 'POST',
			url: 'https://recruitment-platform.herokuapp.com/login',
			data: new URLSearchParams({ username, password }),
			withCredentials: true,
			headers: {
				Cookie: 'Thu, 20 May 2021 18:24:57 GMT',
				Accept: 'application/x-www-form-urlencoded',
				'content-type': 'application/x-www-form-urlencoded',
			},
		});
		return status;
	};

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

	return (
		<authContext.Provider value={{ auth, logIn, logOut }}>
			{children}
		</authContext.Provider>
	);
};

export default AuthProvider;
