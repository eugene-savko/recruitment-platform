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
	},
};
export const authContext = createContext<IAuthLoggedContextState>(
	initAuthContext
);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [auth, setAuth] = useState<IAuthState>(initAuthContext.auth);

	const setAuthData = (dataLogin: IFormInput) => {
		setAuth({ loading: false, dataLoginForm: dataLogin, dataRole: null });
	};

	const getAccess = async () => {
		const { data } = await axios({
			method: 'get',
			url: 'https://recruitment-platform.herokuapp.com/users/current',
			withCredentials: true,
			headers: {
				Cookie: 'Thu, 20 May 2021 18:24:57 GMT',
				// Accept: 'application/x-www-form-urlencoded',
			},
		});
		return data;
	};

	const fetchRequestLogin = async (username: any, password: any) => {
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

	useEffect(() => {
		const authenticateRefresh = async () => {
			try {
				setAuth({
					loading: true,
					dataLoginForm: auth.dataLoginForm,
					dataRole: auth.dataRole,
				});
				const data = await getAccess();
				setAuth({
					loading: false,
					dataLoginForm: auth.dataLoginForm,
					dataRole: data,
				});
			} catch (error) {
				console.dir(error);
				setAuth({
					loading: false,
					dataLoginForm: auth.dataLoginForm,
					dataRole: auth.dataRole,
				});
			}
		};
		authenticateRefresh();
	}, []);

	useEffect(() => {
		const authenticate = async () => {
			try {
				setAuth({
					loading: true,
					dataLoginForm: auth.dataLoginForm,
					dataRole: auth.dataRole,
				});

				const statusSever = await fetchRequestLogin(
					auth.dataLoginForm?.username,
					auth.dataLoginForm?.password
				);

				if (statusSever) {
					const data = await getAccess();
					setAuth({
						loading: false,
						dataLoginForm: auth.dataLoginForm,
						dataRole: data,
					});
				}
			} catch (error) {
				setAuth({
					loading: false,
					dataLoginForm: auth.dataLoginForm,
					dataRole: auth.dataRole,
				});
				console.dir(error);
			}
		};
		authenticate();
	}, [auth.dataLoginForm]);

	return (
		<authContext.Provider value={{ auth, setAuthData }}>
			{children}
		</authContext.Provider>
	);
};

export default AuthProvider;
