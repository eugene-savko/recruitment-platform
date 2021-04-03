import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';

import IRoute from './types/IRoute';

const ROUTES: Array<IRoute> = [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/about',
		exact: true,
		component: AboutPage,
	},
];

export default ROUTES;
