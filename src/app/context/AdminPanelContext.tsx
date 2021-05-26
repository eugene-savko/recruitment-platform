import React, { createContext, useState, useMemo } from 'react';

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
	const [userId, setUserId] = useState(40);
	const adminPanelContextValue = useMemo(() => ({ userId, setUserId }), [
		userId,
	]);
	return (
		<AdminPanelContext.Provider value={adminPanelContextValue}>
			{children}
		</AdminPanelContext.Provider>
	);
};
