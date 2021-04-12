import React, { useState, createContext } from 'react';

interface AuthLoggedContextState {
	isLogged: boolean;
	setIsLogged?: React.Dispatch<React.SetStateAction<boolean>>;
}

const initAuthLogged = {
	isLogged: false,
};

export const AuthLoggedContext = createContext<AuthLoggedContextState>(
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
