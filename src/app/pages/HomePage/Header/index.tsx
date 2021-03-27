import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header: React.FunctionComponent = () => (
	<>
		<AppBar>
			<ToolBar>
				<Logo />
				<NavLinks />
			</ToolBar>
		</AppBar>
	</>
);

export default Header;
