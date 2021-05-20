import React, { useState } from 'react';

// Material ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';

import ROUTES from './routes';
import {
	FrontendLandingContext,
	IFrontendLandingContext,
} from './contexts/FrontendLandingContext';

export const App: React.FunctionComponent = () => {
	const [internshipId, setInternshipId] = useState(1);
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<Layout>
					<FrontendLandingContext.Provider
						value={{ internshipId, setInternshipId }}
					>
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
					</FrontendLandingContext.Provider>
				</Layout>
			</BrowserRouter>
		</React.Fragment>
	);
};
