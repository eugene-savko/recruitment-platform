<<<<<<< HEAD
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import {
	AdminPageContent,
	AdminPageContentWrapper,
	AdminPageRoot,
} from './components';

import routesAdmin from './routes';

export const AdminPage: React.FunctionComponent = () => {
	const [isSideBarOpen, setSideBarOpen] = useState(false);
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
							<Redirect exact from="/" to="/dashboard" />

							{routesAdmin.map((route) => (
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
=======
import React from 'react';

<<<<<<< HEAD
export const AdminPage: React.FunctionComponent = () => {
	return <EnhancedTable />;
>>>>>>> test: testing Material UI table
};
=======
export const AdminPage: React.FunctionComponent = () => <div>Hello</div>;
>>>>>>> feat: Install React Table
