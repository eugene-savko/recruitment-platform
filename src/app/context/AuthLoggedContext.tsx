import React, { useState, createContext } from 'react';
import IAuthLoggedContextState from '../types/IAuthLoggedContextState';

const initAuthLogged = {
	isLogged: false,
};

export const AuthLoggedContext = createContext<IAuthLoggedContextState>(
	initAuthLogged
);

export const AuthLoggedContextProvider: React.FC<React.ReactNode> = ({
	children,
}) => {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<AuthLoggedContext.Provider value={{ isLogged, setIsLogged }}>
			{children}
		</AuthLoggedContext.Provider>
	);
};

export default AuthLoggedContextProvider;
