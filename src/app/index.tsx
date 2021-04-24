import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { AdminPage } from './pages/AdminPage';
import { PrivateRouteAuthAdminPage } from './pages/AuthPage/Auth/hoc/PrivateRouteAuthAdminPage';

export const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={AuthPage} />
					<PrivateRouteAuthAdminPage path="/">
						<AdminPage />
					</PrivateRouteAuthAdminPage>
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
};
