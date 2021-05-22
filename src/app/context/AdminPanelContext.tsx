import React, { createContext, useState } from 'react';

interface IAdminPanelContext {
	userId: number;
	setUserId?: React.Dispatch<React.SetStateAction<number>>;
}
export const AdminPanelContext = createContext<IAdminPanelContext>({
	userId: 0,
});

export const AdminPanelContextProvider: React.FunctionComponent<React.ReactNode> = ({
	children,
}) => {
	const [userId, setUserId] = useState(0);
	return (
		<AdminPanelContext.Provider value={{ userId, setUserId }}>
			{children}
		</AdminPanelContext.Provider>
	);
};
