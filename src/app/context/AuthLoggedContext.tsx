import React, { useState, createContext } from 'react';

interface AuthLoggedContextState {
	isLogged: boolean;
	setIsLogged?: React.Dispatch<React.SetStateAction<boolean>>;
}

const initAuthLogged = {
	isLogged: false,
};

export const AuthLoggedContextProvider = createContext<AuthLoggedContextState>(
	initAuthLogged
);

export const AuthLoggedContext: React.FC<React.ReactNode> = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	console.log(isLogged);

	return (
		<AuthLoggedContextProvider.Provider value={{ isLogged, setIsLogged }}>
			{children}
		</AuthLoggedContextProvider.Provider>
	);
};

export default AuthLoggedContext;
