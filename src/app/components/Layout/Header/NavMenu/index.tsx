import React from 'react';

// types
import IMenuItemData from '../types/IMenuItemData';

import { NavMenuWrapper as Wrapper } from './components/NavMenuWrapper';

import MenuItem from './MenuItem';

interface INavMenuProps {
	menuItemsData: Array<IMenuItemData>;
}

const NavMenu: React.FunctionComponent<INavMenuProps> = ({ menuItemsData }) => (
	<React.Fragment>
		<Wrapper>
			{menuItemsData?.map((menuItem) => (
				<MenuItem
					key={menuItem.path}
					label={menuItem.label}
					path={menuItem.path}
				/>
			))}
		</Wrapper>
	</React.Fragment>
);

export default NavMenu;
