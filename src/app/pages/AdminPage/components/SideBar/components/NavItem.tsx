/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { NavLink as RouterLink } from 'react-router-dom';

import {
	SideBarListItemIcon,
	SideBarListItemText,
} from '../Styled/SideBarStyled';

const NavItem = ({ href, icon: Icon, title, ...rest }: any) => (
	<ListItem component={RouterLink} to={href} button key={title} {...rest}>
		<SideBarListItemIcon>
			<Icon />
		</SideBarListItemIcon>
		<SideBarListItemText primary={title} />
	</ListItem>
);
export default NavItem;
