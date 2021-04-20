import React from 'react';
import { Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IBurgerProps from './types/IBurgerProps';

export const Burger: React.FunctionComponent<IBurgerProps> = ({
	onClickMobile,
}) => (
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
