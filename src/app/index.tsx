import React, { useMemo, useState } from 'react';

// Material ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';

import ROUTES from './routes';
import { FrontendLandingContext } from './contexts/FrontendLandingContext';

export const App: React.FunctionComponent = () => {
	const [internshipValue, setInternshipValue] = useState(1);
	const memoizedInternshipValue = useMemo(
		() => ({
			internshipValue,
			setInternshipValue,
		}),
		[internshipValue]
	);
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<Layout>
					<FrontendLandingContext.Provider value={memoizedInternshipValue}>
						<Switch>
							{ROUTES?.map((route) => (
								<Route
									key={route.path}
									exact={route.exact}
									path={route.path}
									component={route.component}
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
