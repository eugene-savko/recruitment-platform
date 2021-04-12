import React from 'react';
import { List } from '@material-ui/core';
import { items } from './helpers/items';
import NavItem from './NavItem';

export const NavList: React.FunctionComponent = () => (
	<List>
		{items.map((item) => (
			<NavItem
				key={item.title}
				href={item.href}
				title={item.title}
				icon={item.icon}
			/>
		))}
	</List>
);
