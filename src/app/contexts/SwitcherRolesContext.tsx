import React, { createContext, useState } from 'react';

interface ISwitcherRoleContext {
	switchedRole: string;
	setSwitchedRole?: React.Dispatch<React.SetStateAction<string>>;
}

export const SwitcherRolesContext = createContext<ISwitcherRoleContext>({
	switchedRole: 'RECRUITER',
});

export const SwitcherRolesProvider: React.FunctionComponent<React.ReactNode> = ({
	children,
}) => {
	const [switchedRole, setSwitchedRole] = useState('RECRUITER');

	return (
		<SwitcherRolesContext.Provider value={{ switchedRole, setSwitchedRole }}>
			{children}
		</SwitcherRolesContext.Provider>
	);
};
