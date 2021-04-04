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

export const App: React.FC = () => (
	<>
		<CssBaseline />
		<BrowserRouter>
			<Layout>
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
			</Layout>
		</BrowserRouter>
	</>
);
