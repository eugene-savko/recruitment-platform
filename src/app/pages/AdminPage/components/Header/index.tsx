import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { Logo } from './Logo';
import { Burger } from './Burger';
import { ToolBarButtons } from './ToolBarButtons';
import { IPropsHeader } from './types';

export const Header: React.FC<IPropsHeader> = ({
	onShowHideSidebar,
}: IPropsHeader) => (
	<AppBar>
		<Toolbar>
			<Logo />
			<ToolBarButtons />
			<Burger onClickMobile={onShowHideSidebar} />
		</Toolbar>
	</AppBar>
);
