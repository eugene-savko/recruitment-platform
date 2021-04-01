import React from 'react';
import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Burger = () => {
	console.log('Burger');
	return (
		<Hidden only={['md', 'lg', 'xl']}>
			<IconButton style={{ marginLeft: 'auto ' }} color="inherit">
				<MenuIcon />
			</IconButton>
		</Hidden>
	);
};
