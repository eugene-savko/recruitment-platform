import IRoute from 'app/types/IRoute';
import { ScheduleTechSpecialist } from './ScheduleTechSpecialist/index';
import { DashBoard } from './DashBoard/DashBoard';
import { Profile } from './Profile';
import { ScheduleRecruiter } from './ScheduleRecruiter/index';
import { NotFoundPage } from './NotFound/index';
import { CourseEditor } from './CourseЕditor';
import { AdminTable } from './AdminTable';

export const routesAdmin: Array<IRoute> = [
	{
		path: '/dashboard',
		exact: false,
		component: DashBoard,
	},
	{
		path: '/table',
		exact: false,
		component: AdminTable,
	},
	{
		path: '/profile',
		exact: false,
		component: Profile,
	},
	{
		path: '/schedule-recruiter',
		exact: false,
		component: ScheduleRecruiter,
	},
	{
		path: '/schedule-techspecialist',
		exact: false,
		component: ScheduleTechSpecialist,
	},
	{
		path: '/course-editor',
		exact: false,
		component: CourseEditor,
	},
	{
		path: '/*',
		exact: false,
		component: NotFoundPage,
	},
];

export default routesAdmin;
