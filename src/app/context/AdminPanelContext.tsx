import React, { createContext, useState, useMemo } from 'react';

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
	const [userId, setUserId] = useState(29);
	const [internshipId, setInternshipId] = useState(1);
	return (
		<AdminPanelContext.Provider
			value={{ userId, setUserId, internshipId, setInternshipId }}
		>
			{children}
		</AdminPanelContext.Provider>
	);
};
