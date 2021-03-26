import React from 'react';

// Material-ui
import { CssBaseline } from '@material-ui/core';

// React-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import Header from './components/Layout/Header';

export const App: React.FunctionComponent = () => (
	<>
		<CssBaseline />
		<BrowserRouter>
			<Layout>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</>
);
