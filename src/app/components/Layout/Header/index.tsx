import React, { useEffect, useState } from 'react';

// components
import Logo from './Logo';
import NavMenu from './NavMenu';

// styles
import { Wrapper, Container } from './components';

// interfaces
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

const Header: React.FunctionComponent = () => {
	const [colorBackground, setColorBackground] = useState<string>('');

	const listenScrollEvent = () => {
		if (window.scrollY < 73) {
			setColorBackground('');
		} else if (window.scrollY > 70) {
			setColorBackground('#fff');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	});
	return (
		<React.Fragment>
			<Wrapper style={{ background: colorBackground }}>
				<Container>
					<Logo />
					<NavMenu menuItemsData={MenuItemsData} />
				</Container>
			</Wrapper>
		</React.Fragment>
	);
};

export default Header;
