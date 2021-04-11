// toto перенести файлы из styled на уровень выше
// toto перенести файлы из components на уровень выше

import React from 'react';

// Material-ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { NotFoundPage } from './pages/NotFoundPage';

// Routs
import ROUTES from './routes';

// Context
import AuthContextProvider from './context/AuthContext';

export const App: React.FC = () => (
	<>
		<CssBaseline />
		<BrowserRouter>
			<AuthContextProvider>
				<Switch>
					{ROUTES?.map((ROUTE) => (
						<Route
							key={ROUTE.path}
							exact={ROUTE.exact}
							path={ROUTE.path}
							component={ROUTE.component}
						/>
					))}
					<Route path="/not-found" component={NotFoundPage} />
					<Redirect exact from="*" to="/not-found" />
				</Switch>
			</AuthContextProvider>
		</BrowserRouter>
	</>
);
