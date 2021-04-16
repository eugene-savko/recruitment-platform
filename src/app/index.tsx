import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import { AuthPage } from './pages/AuthPage';
import { AdminPage } from './pages/AdminPage';
import { PrivateRouteAuthAdminPage } from './pages/AuthPage/Auth/hoc/PrivateRouteAuthAdminPage';

export const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<AuthContextProvider>
					<Switch>
						<Route exact path="/" component={AuthPage} />
						<PrivateRouteAuthAdminPage path="/admin">
							<AdminPage />
						</PrivateRouteAuthAdminPage>
						<Redirect exact from="*" to="/" />
					</Switch>
				</AuthContextProvider>
			</BrowserRouter>
		</React.Fragment>
	);
};
