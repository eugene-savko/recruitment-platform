import React, { useEffect, useState } from 'react';

// components
import { AppRoutePath } from 'app/route-paths';
import Logo from './Logo';
import NavMenu from './NavMenu';

// styles
import { Wrapper, Container } from './components';

// interfaces
import IMenuItemData from './types/IMenuItemData';

const MenuItemsData: Array<IMenuItemData> = [
	{
		label: 'Trainings',
		path: AppRoutePath.ROOT,
	},
	{
		label: 'About trainings',
		path: AppRoutePath.ABOUT,
	},
	{
		label: 'FAQ',
		path: AppRoutePath.QUESTIONS,
	},
];

const Header: React.FunctionComponent = () => {
	const [colorBackground, setColorBackground] = useState('');

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
