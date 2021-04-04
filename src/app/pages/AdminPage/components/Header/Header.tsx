import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { Logo } from './Logo';
import { Burger } from './Burger';
import { ToolBarButtons } from './ToolBarButtons';

export const Header = () => {
	console.log('Header');
	return (
		<AppBar>
			<Toolbar>
				<Logo />
				<ToolBarButtons />
				<Burger />
			</Toolbar>
		</AppBar>
	);
};
