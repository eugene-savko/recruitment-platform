import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { AdminPage } from './pages/AdminPage';
import { PrivateRouteAuthAdminPage } from './pages/AuthPage/Auth/hoc/PrivateRouteAuthAdminPage';
import { AdminPanelContextProvider } from './context/AdminPanelContext';

export const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={AuthPage} />
					<PrivateRouteAuthAdminPage path="/">
						<AdminPanelContextProvider>
							<AdminPage />
						</AdminPanelContextProvider>
					</PrivateRouteAuthAdminPage>
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
};
