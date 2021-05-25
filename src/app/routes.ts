import { AppRoutePath } from './route-paths';
import { AboutPage } from './pages/AboutPage';
import { FAQsPage } from './pages/FAQsPage';
import { HomePage } from './pages/HomePage';
import { TrainingPage } from './pages/TrainingPage';

import IRoute from './types/IRoute';

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
];

export default ROUTES;
