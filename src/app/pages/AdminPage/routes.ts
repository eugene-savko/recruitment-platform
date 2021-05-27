import IRoute from 'app/types/IRoute';
import IMapped from 'app/types/IMapped';
import { DashBoard } from './DashBoard';
import { Profile } from './Profile';
import { ScheduleRecruiter } from './ScheduleRecruiter/index';
import { NotFoundPage } from './NotFound/index';
import { CourseEditor } from './CourseEditor';
import { CandidateTable } from './CandidateTable';

const ADMIN_ROUTE_ROOT_PATH = '/admin';

export const AdminRoutePath = {
	ROOT: ADMIN_ROUTE_ROOT_PATH,
	DASHBOARD: `${ADMIN_ROUTE_ROOT_PATH}/dashboard`,
	TABLE: `${ADMIN_ROUTE_ROOT_PATH}/table`,
	PROFILE: `${ADMIN_ROUTE_ROOT_PATH}/profile`,
	SCHEDULE_RECRUITER: `${ADMIN_ROUTE_ROOT_PATH}/schedule-recruiter`,
	SCHEDULE_TECHSPECIALIST: `${ADMIN_ROUTE_ROOT_PATH}/schedule-techspecialist`,
	COURSE_EDITOR: `${ADMIN_ROUTE_ROOT_PATH}/course-editor`,
};

const dashboard = {
	path: AdminRoutePath.DASHBOARD,
	exact: false,
	component: DashBoard,
};

const tableCandidates = {
	path: AdminRoutePath.TABLE,
	exact: false,
	component: CandidateTable,
};

const profile = {
	path: AdminRoutePath.PROFILE,
	exact: false,
	component: Profile,
};

const scheduleRecruiter = {
	path: AdminRoutePath.SCHEDULE_RECRUITER,
	exact: false,
	component: ScheduleRecruiter,
};

const editorCourse = {
	path: AdminRoutePath.COURSE_EDITOR,
	exact: false,
	component: CourseEditor,
};

const homePage = {
	path: '/*',
	exact: false,
	component: NotFoundPage,
};

export const routesAdmin: Array<IRoute> = [
	dashboard,
	tableCandidates,
	profile,
	scheduleRecruiter,
	editorCourse,
	homePage,
];

export const routesRecruiter: Array<IRoute> = [
	dashboard,
	tableCandidates,
	profile,
	scheduleRecruiter,
	homePage,
];

export const routesTechSpecialist: Array<IRoute> = [
	dashboard,
	tableCandidates,
	profile,
	scheduleRecruiter,
	homePage,
];

export const routes: IMapped<IRoute[]> = {
	ADMIN: routesAdmin,
	RECRUITER: routesRecruiter,
	SPECIALIST: routesTechSpecialist,
};
