import React, { createContext, useState } from 'react';

interface ISwitcherRoles {
	switchedRole: string;
	setSwitchedRole?: React.Dispatch<React.SetStateAction<string>>;
}

export const SwitcherRolesContext = createContext<ISwitcherRoles>({
	switchedRole: 'RECRUITERS',
});

export const SwitcherRolesProvider: React.FunctionComponent<React.ReactNode> = ({
	children,
}) => {
	const [switchedRole, setSwitchedRole] = useState('RECRUITERS');
	return (
		<SwitcherRolesContext.Provider value={{ switchedRole, setSwitchedRole }}>
			{children}
		</SwitcherRolesContext.Provider>
	);
};
