import React, { useState } from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';
import { Candidate } from './components/Candidate/Candidate';
import { DashBoard } from './components/DashBoard/DashBoard';
import { NotFoundPage } from './components/NotFound/index';
import {
	AdminPageContent,
	AdminPageContentWrapper,
	AdminPageRoot,
} from './styled';
import { Profile } from './components/Profile/Profile';

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
										<Redirect exact from={`${path}`} to={`${path}/dashboard`} />
										<Route path={`${path}/dashboard`} component={DashBoard} />
										<Route path={`${path}/candidate`} component={Candidate} />
										<Route path={`${path}/profile`} component={Profile} />
										<Redirect exact from={`${path}/*`} to="not-found" />
										<Route path="not-found" component={NotFoundPage} />
									</Switch>
								</AdminPageContent>
							</AdminPageContentWrapper>
						</AdminPageRoot>
					);
				}}
			/>
			<Route path="not-found" component={NotFoundPage} />
		</React.Fragment>
	);
};
