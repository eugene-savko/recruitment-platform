import React, { useState } from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import { Header } from './components/LayoutAdmin/Header';
import { Sidebar } from './components/LayoutAdmin/SideBar';
import { Candidate } from './components/LayoutAdmin/Candidate/Candidate';
import { DashBoard } from './components/LayoutAdmin/DashBoard/DashBoard';
import { NotFoundPage } from './components/LayoutNotFound/index';
import {
	AdminPageContent,
	AdminPageContentWrapper,
	AdminPageRoot,
} from './styled';

export const AdminPage: React.FunctionComponent = () => {
	const { path } = useRouteMatch();
	const [isSideBarOpen, setSideBarOpen] = useState(false);
	return (
		<React.Fragment>
			<Route
				path={path}
				render={() => {
					return (
						<AdminPageRoot>
							<Header onShowHideSidebar={() => setSideBarOpen(true)} />
							<Sidebar
								closeSideBar={() => setSideBarOpen(false)}
								openSideBar={isSideBarOpen}
							/>
							<AdminPageContentWrapper>
								<AdminPageContent>
									<Switch>
										<Route path={`${path}/candidate`} component={Candidate} />
										<Route path={`${path}/dashboard`} component={DashBoard} />
										<Route exact path={`${path}/*`} component={NotFoundPage} />
									</Switch>
								</AdminPageContent>
							</AdminPageContentWrapper>
						</AdminPageRoot>
					);
				}}
			/>
			<Route path={`${path}/*`} component={NotFoundPage} />
		</React.Fragment>
	);
};