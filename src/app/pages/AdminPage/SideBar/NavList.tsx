import React, { useContext } from 'react';
import { List, ListItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import { authContext } from 'app/contexts/AuthLoggedContext';
import { AppRoutePath } from 'app/route-paths';
import { menuItemsList } from './helpers/items';
import NavItem from './NavItem';
import { SideBarListItemIcon, SideBarListItemText } from './components';
import { ISideBarItems } from './types';

export const NavList: React.FunctionComponent = () => {
	const history = useHistory();
	const { auth, logOut } = useContext(authContext);
	const role = auth.dataRole?.role as string;
	const menuItems = menuItemsList[role];

	const leavePage = () => {
		history.push(AppRoutePath.LOGIN);
		logOut?.();
	};
	return (
		<List>
			{menuItems.map(({ title, href, icon }: ISideBarItems) => (
				<NavItem key={title} href={href} title={title} icon={icon} />
			))}
			<ListItem button onClick={leavePage}>
				<SideBarListItemIcon>
					<ExitToAppIcon />
				</SideBarListItemIcon>
				<SideBarListItemText primary="Logout" />
			</ListItem>
		</List>
	);
};
