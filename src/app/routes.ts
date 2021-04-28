import { AboutPage } from './pages/AboutPage';
import { FAQsPage } from './pages/FAQsPage';
import { HomePage } from './pages/HomePage';
import { TrainingPage } from './pages/TrainingPage';

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
	{
		path: '/questions',
		exact: true,
		component: FAQsPage,
	},
	{
		path: '/training-page',
		exact: true,
		component: TrainingPage,
	},
];

export default ROUTES;
