/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';
import { Candidate } from './components/Candidate/Candidate';
import { DashBoard } from './components/DashBoard/DashBoard';
import {
	AdminPageContent,
	AdminPageContentWrapper,
	AdminPageRoot,
} from './styled';

export const AdminPage: React.FC = () => {
	const { path } = useRouteMatch();
	const [isSideBarOpen, setSideBarOpen] = useState(false);

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
						<Route exact path={`${path}/candidate`} component={Candidate} />
						<Route path={`${path}/dashboard`} component={DashBoard} />
						<Redirect exact from={`${path}/*`} to="/not-found" />
					</Switch>
				</AdminPageContent>
			</AdminPageContentWrapper>
		</AdminPageRoot>
	);
};
