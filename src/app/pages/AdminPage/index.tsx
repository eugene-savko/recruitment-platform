import React, { useState, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import {
	AdminPageContent,
	AdminPageContentWrapper,
	AdminPageRoot,
} from './components';

import { AdminRoutePath, routes } from './routes';

import { authContext } from '../../contexts/AuthLoggedContext';

export const AdminPage: React.FunctionComponent = () => {
	const [isSideBarOpen, setSideBarOpen] = useState(false);
	const { auth } = useContext(authContext);
	const role = auth.dataRole?.role as string;
	const routesRole = routes[`${role}`];

	return (
		<React.Fragment>
			<AdminPageRoot>
				<Header onShowHideSidebar={() => setSideBarOpen(true)} />
				<Sidebar
					closeSideBar={() => setSideBarOpen(false)}
					openSideBar={isSideBarOpen}
				/>
				<AdminPageContentWrapper>
					<AdminPageContent>
						<Switch>
							<Redirect
								exact
								from={AdminRoutePath.ROOT}
								to={AdminRoutePath.DASHBOARD}
							/>

							{routesRole.map((route) => (
								<Route
									key={route.path}
									exact={route.exact}
									path={route.path}
									component={route.component}
								/>
							))}
						</Switch>
					</AdminPageContent>
				</AdminPageContentWrapper>
			</AdminPageRoot>
		</React.Fragment>
	);
};
