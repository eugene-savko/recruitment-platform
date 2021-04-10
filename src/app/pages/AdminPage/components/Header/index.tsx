import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { Logo } from './components/Logo';
import { Burger } from './components/Burger';
import { ToolBarButtons } from './components/ToolBarButtons';
import { IPropsHeader } from './Types';

export const Header = ({ onShowHideSidebar }: IPropsHeader) => (
	<AppBar>
		<Toolbar>
			<Logo />
			<ToolBarButtons />
			<Burger onClickMobile={onShowHideSidebar} />
		</Toolbar>
	</AppBar>
);
