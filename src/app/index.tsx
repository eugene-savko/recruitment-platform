import React, { useContext } from 'react';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
// Material-ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { NotFoundPage } from './pages/NotFoundPage';

// Context
import AuthContextProvider from './context/AuthContext';
import { AuthPage } from './pages/AuthPage';
import { AdminPage } from './pages/AdminPage';

export const App: React.FunctionComponent = () => {
	const { isLogged } = useContext(AuthLoggedContext);

	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<AuthContextProvider>
					<Switch>
						<Route exact path="/" component={AuthPage} />
						{isLogged && <Route path="/admin" component={AdminPage} />}
						<Route path="/not-found" component={NotFoundPage} />
						<Redirect exact from="*" to="/not-found" />
					</Switch>
				</AuthContextProvider>
			</BrowserRouter>
		</React.Fragment>
	);
};
