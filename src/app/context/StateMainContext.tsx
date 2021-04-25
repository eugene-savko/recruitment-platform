import { IInitStateMainContext, IInitStateMain } from 'app/types';

import React, { useState, createContext } from 'react';

const initStateMainContext: IInitStateMainContext = {
	dataFromServer: {
		specialityId: '',
		englishLevel: '',
		cv: '',
		internshipId: '',
		userDto: {
			firstName: '',
			lastName: '',
			email: '',
			country: '',
			city: '',
			phone: '',
			otherInformation: '',
		},
	},
};

export const StateMainContext = createContext<IInitStateMainContext>(
	initStateMainContext
);

const StateMainContextProvider: React.FC<React.ReactNode> = ({ children }) => {
	const [dataFromServer, setDataFromServer] = useState<IInitStateMain>(
		initStateMainContext.dataFromServer
	);
	return (
		<StateMainContext.Provider value={{ dataFromServer, setDataFromServer }}>
			{children}
		</StateMainContext.Provider>
	);
};

export default StateMainContextProvider;
