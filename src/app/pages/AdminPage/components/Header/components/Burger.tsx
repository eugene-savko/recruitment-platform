import React from 'react';
import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IPropsBurger from '../types/IPropsBurger';

export const Burger: React.FC<IPropsBurger> = ({ onClickMobile }) => (
	<Hidden only={['md', 'lg', 'xl']}>
		<IconButton
			onClick={onClickMobile}
			style={{ marginLeft: 'auto ' }}
			color="inherit"
		>
			<MenuIcon />
		</IconButton>
	</Hidden>
);
