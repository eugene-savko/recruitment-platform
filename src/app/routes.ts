import { AppRoutePath } from './route-paths';
import { AboutPage } from './pages/AboutPage';
import { FAQsPage } from './pages/FAQsPage';
import { HomePage } from './pages/HomePage';
import { TrainingPage } from './pages/TrainingPage';

import IRoute from './types/IRoute';
import { NotFoundPage } from './pages/NotFoundPage';

const ROUTES: Array<IRoute> = [
	{
		path: AppRoutePath.ROOT,
		exact: true,
		component: HomePage,
	},
	{
		path: AppRoutePath.ABOUT,
		exact: true,
		component: AboutPage,
	},
	{
		path: AppRoutePath.QUESTIONS,
		exact: true,
		component: FAQsPage,
	},
	{
		path: AppRoutePath.TRAINING,
		exact: true,
		component: TrainingPage,
	},
	{
		path: AppRoutePath.NOTFOUND,
		exact: true,
		component: NotFoundPage,
	},
];

export default ROUTES;
