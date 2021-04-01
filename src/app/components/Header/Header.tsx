import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { Logo } from './Logo';
import { Burger } from './Burger';

export const Header = () => {
	console.log('Header');
	return (
		<AppBar>
			<Toolbar>
				<Logo />
				<Burger />
			</Toolbar>
		</AppBar>
	);
};
