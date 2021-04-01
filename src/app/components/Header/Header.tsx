import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { Logo } from './Logo';

export const Header = () => {
	console.log('Header');
	return (
		<AppBar>
			<Toolbar>
				<Logo />
			</Toolbar>
		</AppBar>
	);
};
