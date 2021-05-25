import React, { createContext, useState } from 'react';

interface ISwitcherRoles {
	switchedRole: string;
	setSwitchedRole?: React.Dispatch<React.SetStateAction<string>>;
}
export const SwitcherRolesContext = createContext<ISwitcherRoles>({
	switchedRole: 'RECRUITER',
});

export const SwitcherRolesProvider: React.FunctionComponent<React.ReactNode> = ({
	children,
}) => {
	const [switchedRole, setSwitchedRole] = useState('');
	return (
		<SwitcherRolesContext.Provider value={{ switchedRole, setSwitchedRole }}>
			{children}
		</SwitcherRolesContext.Provider>
	);
};
