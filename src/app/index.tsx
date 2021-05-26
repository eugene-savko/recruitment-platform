import React from 'react';

// Material ui
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { AuthPage } from './pages/AuthPage';
import { AdminPage } from './pages/AdminPage';
import { PrivateRouteAuthAdminPage } from './pages/AuthPage/Auth/hoc/PrivateRouteAuthAdminPage';
import { AdminRoutePath } from './pages/AdminPage/routes';

// Context Providers
import { FrontendLandingContextProvider } from './contexts/FrontendLandingContext';
import { AdminPanelContextProvider } from './contexts/AdminPanelContext';

// Routing
import ROUTES from './routes';
import { AppRoutePath } from './route-paths';

export const App: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path={AppRoutePath.LOGIN} component={AuthPage} exact />
					<PrivateRouteAuthAdminPage path={AdminRoutePath.ROOT}>
						<AdminPanelContextProvider>
							<AdminPage />
						</AdminPanelContextProvider>
					</PrivateRouteAuthAdminPage>
					<FrontendLandingContextProvider>
						{ROUTES?.map(({ path, exact, component: RouteComponent }) => (
							<Route
								key={path}
								exact={exact}
								path={path}
								render={(props) => (
									<Layout>
										<RouteComponent {...props} />
									</Layout>
								)}
							/>
						))}
					</FrontendLandingContextProvider>
					<Route
						path="*"
						render={() => (
							<Layout>
								<NotFoundPage />
							</Layout>
						)}
					/>
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
};
