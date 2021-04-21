import { AdminPage } from './pages/AdminPage';
import { HomePage } from './pages/HomePage';

import IRoute from './types/IRoute';

const ROUTES: Array<IRoute> = [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/admin',
		exact: true,
		component: AdminPage,
	},
];

export default ROUTES;
