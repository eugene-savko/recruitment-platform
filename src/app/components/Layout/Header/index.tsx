import React from 'react';

import { Logo } from './Logo';
import { NavMenu } from './NavMenu';

import { Wrapper } from './components/Wrapper';
import { Container } from './components/Container';

// Interfaces
import IMenuItemData from './types/IMenuItemData';

const MenuItemsData: Array<IMenuItemData> = [
	{
		label: 'Trainings',
		isSelected: true,
		path: '/',
	},
	{
		label: 'About trainings',
		isSelected: false,
		path: '/about',
	},
	{
		label: 'FAQ',
		isSelected: false,
		path: '/questions',
	},
];

const Header: React.FunctionComponent = () => (
	<React.Fragment>
		<Wrapper>
			<Container>
				<Logo />
				<NavMenu menuItemsData={MenuItemsData} />
			</Container>
		</Wrapper>
	</React.Fragment>
);

export default Header;
