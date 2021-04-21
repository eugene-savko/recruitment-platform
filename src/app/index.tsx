import React from 'react';

// Material-ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import { NotFoundPage } from './pages/NotFoundPage';

import ROUTES from './routes';

export const App: React.FunctionComponent = () => (
	<React.Fragment>
		<CssBaseline />
		<BrowserRouter>
			<Switch>
				{ROUTES?.map((ROUTE) => (
					<Route
						key={ROUTE.path}
						exact={ROUTE.exact}
						path={ROUTE.path}
						component={ROUTE.component}
					/>
				))}
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	</React.Fragment>
);
