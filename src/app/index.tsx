import React, { useContext } from 'react';
import { AuthLoggedContext } from 'app/context/AuthLoggedContext';
// Material-ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Pages

// Context
import AuthContextProvider from './context/AuthContext';
import { AuthPage } from './pages/AuthPage';
import { AdminPage } from './pages/AdminPage';

export const App: React.FunctionComponent = () => {
	// will be remove after getting API
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { isLogged } = useContext(AuthLoggedContext);
	const isLogeedLocalStorage = localStorage.getItem('IsLoaded');

	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<AuthContextProvider>
					<Switch>
						<Route exact path="/" component={AuthPage} />
						{/* {isLogeedLocalStorage && (
							<Route path="/admin" component={AdminPage} />
						)} */}
						<Route
							path="/admin"
							render={() => {
								return isLogeedLocalStorage ? (
									<AdminPage />
								) : (
									<Redirect to="/" />
								);
							}}
						/>

						<Redirect exact from="*" to="/" />
					</Switch>
				</AuthContextProvider>
			</BrowserRouter>
		</React.Fragment>
	);
};
