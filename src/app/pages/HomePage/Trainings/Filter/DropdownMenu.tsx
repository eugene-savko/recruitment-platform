import * as React from 'react';

import { DropdownMenuButton } from './components';

interface IDropdownMenu {
	toogleMenu: Function;
	children: React.ReactNode;
	menuState: boolean;
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
