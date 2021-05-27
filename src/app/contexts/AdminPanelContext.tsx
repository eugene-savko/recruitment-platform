import React, { createContext, useMemo, useState } from 'react';

interface IAdminPanelContext {
	userId: number;
	internshipId: number;
	setInternshipId?: React.Dispatch<React.SetStateAction<number>>;
	setUserId?: React.Dispatch<React.SetStateAction<number>>;
}
export const AdminPanelContext = createContext<IAdminPanelContext>({
	userId: 0,
	internshipId: 0,
});

export const AdminPanelContextProvider: React.FunctionComponent<React.ReactNode> = ({
	children,
}) => {
	const [userId, setUserId] = useState(0);
	const [internshipId, setInternshipId] = useState(1);
	const adminPanelContextValue = useMemo(
		() => ({ userId, setUserId, internshipId, setInternshipId }),
		[userId, internshipId]
	);
	return (
		<AdminPanelContext.Provider value={adminPanelContextValue}>
			{children}
		</AdminPanelContext.Provider>
	);
};
