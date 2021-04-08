import * as React from 'react';

import { DropdownMenuButton } from './components';

interface IDropdownMenu {
	toogleMenu(): void;
	children: React.ReactNode;
	menuState: boolean | null;
}

export const DropdownMenu: React.FunctionComponent<IDropdownMenu> = ({
	toogleMenu,
	children,
	menuState,
}) => (
	<DropdownMenuButton
		type="button"
		menuState={menuState}
		onClick={() => toogleMenu()}
	>
		{children}
	</DropdownMenuButton>
);
