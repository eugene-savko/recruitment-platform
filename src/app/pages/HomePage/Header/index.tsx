import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

import HeaderTheme from '../../../components/Header/Header';
import WrapperHeader from '../../../components/Header/WrapperHeader';

const Header: React.FunctionComponent = () => (
	<>
		<HeaderTheme>
			<WrapperHeader>
				<Logo />
				<NavLinks />
			</WrapperHeader>
		</HeaderTheme>
	</>
);

export default Header;
