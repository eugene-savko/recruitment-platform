import React, { useState, createContext } from 'react';

const defauldAuthContex = {
	avatar: '',
	email: '',
	first_name: '',
	id: 0,
	last_name: '',
};

interface AppContextState {
	avatar: string;
	email: string;
	// eslint-disable-next-line camelcase
	first_name: string;
	id: number;
	// eslint-disable-next-line camelcase
	last_name: string;
}

const appCtxDefaultValue = {
	dataFromServer: defauldAuthContex,
	// eslint-disable-next-line no-unused-vars
	setDataFromServer: (state: AppContextState) => {},
};

export const AuthContext = createContext(appCtxDefaultValue);

const AuthContextProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [dataFromServer, setDataFromServer] = useState(
		appCtxDefaultValue.dataFromServer
	);

	return (
		<AuthContext.Provider value={{ dataFromServer, setDataFromServer }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
