import React, { useContext } from 'react';
import { List, ListItem } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import { items } from './helpers/items';
import NavItem from './NavItem';
import { SideBarListItemIcon, SideBarListItemText } from './components';
import { authContext } from '../../../context/AuthLoggedContext';

export const NavList: React.FunctionComponent = () => {
	const history = useHistory();
	const { logOut } = useContext(authContext);

	const leavePage = () => {
		history.push('/login');
		logOut?.();
	};
	return (
		<List>
			{items.map((item) => (
				<NavItem
					key={item.title}
					href={item.href}
					title={item.title}
					icon={item.icon}
				/>
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
