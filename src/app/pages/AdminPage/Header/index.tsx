import React from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { Logo } from './Logo';
import { Burger } from './Burger';
import { ToolBarButtons } from './ToolBarButtons';
import { IHeaderProps } from './types';

export const Header: React.FunctionComponent<IHeaderProps> = ({
	onShowHideSidebar,
}: IHeaderProps) => (
	<AppBar>
		<Toolbar>
			<Logo />
			<ToolBarButtons />
			<Burger onClickMobile={onShowHideSidebar} />
		</Toolbar>
	</AppBar>
);
