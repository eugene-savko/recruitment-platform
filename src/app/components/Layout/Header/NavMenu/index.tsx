import React from 'react';

import IMenuItemData from '../types/IMenuItemData';

import { NavMenuWrapper as Wrapper } from './components/NavMenuWrapper';

import { MenuItem } from './MenuItem';

interface INavMenuProps {
	menuItemsData: Array<IMenuItemData>;
}

export const NavMenu: React.FunctionComponent<INavMenuProps> = ({
	menuItemsData,
}) => (
	<>
		<Wrapper>
			{menuItemsData?.map((menuItem) => (
				<MenuItem
					key={menuItem.path}
					label={menuItem.label}
					isSelected={menuItem.isSelected}
					path={menuItem.path}
				/>
			))}
		</Wrapper>
	</>
);
