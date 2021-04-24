import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';
import {
	AdminPageContent,
	AdminPageContentWrapper,
	AdminPageRoot,
} from './styled';

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
};
