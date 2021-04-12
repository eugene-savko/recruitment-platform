/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { NavLink as RouterLink } from 'react-router-dom';

import { SideBarListItemIcon, SideBarListItemText } from '../Styled';
import { ISideBarItems } from '../types';

const NavItem: React.FC<ISideBarItems> = ({
	href,
	icon: Icon,
	title,
}: ISideBarItems) => (
	<ListItem component={RouterLink} to={href} button key={title}>
		<SideBarListItemIcon>
			<Icon />
		</SideBarListItemIcon>
		<SideBarListItemText primary={title} />
	</ListItem>
);
export default NavItem;