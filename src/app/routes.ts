import { HomePage } from './pages/HomePage';

import IRoute from './types/IRoute';

const ROUTES: Array<IRoute> = [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
];

export default ROUTES;
