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
} from './Styled';

export const AdminPage = () => {
	const { path } = useRouteMatch();
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<AdminPageRoot>
			<Header onMobileNavOpen={() => setMobileNavOpen(true)} />
			<Sidebar
				onMobileClose={() => setMobileNavOpen(false)}
				openMobile={isMobileNavOpen}
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
