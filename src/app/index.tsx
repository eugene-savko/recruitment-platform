import React from 'react';

// Material-ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';

// Routs
import ROUTES from './routes';
// Context
import AuthContextProvider from './context/AuthContext';

// avatar: "https://reqres.in/img/faces/1-image.jpg"
// email: "george.bluth@reqres.in"
// first_name: "George"
// id: 1
// last_name: "Bluth

export const App: React.FC = () => (
	<>
		<CssBaseline />
		<BrowserRouter>
			<Layout>
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
			</Layout>
		</BrowserRouter>
	</>
);
