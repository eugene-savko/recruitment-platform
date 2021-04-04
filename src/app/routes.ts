import { AdminPage } from './pages/AdminPage';
import { AuthPage } from './pages/AuthPage';

import IRoute from './types/IRoute';

const ROUTES: Array<IRoute> = [
	{
		path: '/',
		exact: true,
		component: AuthPage,
	},
	{
		path: '/admin',
		exact: false,
		component: AdminPage,
	},
];

export default ROUTES;
