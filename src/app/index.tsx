import React from 'react';

// Material-ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import Header from './pages/HomePage/Header';

// import ROUTES from './routes';

export const App: React.FunctionComponent = () => (
	<>
		<CssBaseline />
		<BrowserRouter>
			<Header />
			<Layout>
				<Switch>
					{/* {ROUTES?.map((ROUTE) => (
						<Route
							key={ROUTE.path}
							exact={ROUTE.exact}
							path={ROUTE.path}
							component={ROUTE.component}
						/>
					))} */}
					<Route component={NotFoundPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</>
);
