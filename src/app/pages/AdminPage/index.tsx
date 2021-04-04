import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/SideBar/SideBar';
import { Candidate } from './components/Candidate/Candidate';
import { DashBoard } from './components/DashBoard/DashBoard';
import {
	AdminPageContent,
	AdminPageContentWrapper,
	AdminPageRoot,
} from './Styled';

export const AdminPage = () => {
	const { path } = useRouteMatch();

	return (
		<AdminPageRoot>
			<Header />
			<Sidebar />
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
