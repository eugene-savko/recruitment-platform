import IContextState from 'app/types/initContextState';
import React, { useState, createContext } from 'react';
import IDefaultContextState from '../types/IDefaultContextState';

const initContextState: IContextState = {
	dataFromServer: {
		avatar: '',
		email: '',
		first_name: '',
		id: 0,
		last_name: '',
	},
};

export const AuthContext = createContext<IContextState>(initContextState);

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
