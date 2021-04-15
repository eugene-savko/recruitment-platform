import React, { useState, createContext } from 'react';
import InitContextState from '../types/IInitContextState';
import IDefaultContextState from '../types/IDefaultContextState';

const initContextState: InitContextState = {
	dataFromServer: {
		avatar: '',
		email: '',
		first_name: '',
		id: 0,
		last_name: '',
	},
};

export const AuthContext = createContext<InitContextState>(initContextState);

const AuthContextProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [dataFromServer, setDataFromServer] = useState<IDefaultContextState>(
		initContextState.dataFromServer
	);

	return (
		<AuthContext.Provider value={{ dataFromServer, setDataFromServer }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
