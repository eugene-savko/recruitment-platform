import IRoute from 'app/types/IRoute';
import { ScheduleTechSpecialist } from './ScheduleTechSpecialist/index';
import { DashBoard } from './DashBoard/DashBoard';
import { Profile } from './Profile';
import { ScheduleRecruiter } from './ScheduleRecruiter/index';
import { NotFoundPage } from './NotFound/index';
import { CourseEditor } from './CourseEditor';
import { CandidateTable } from './CandidateTable';

import IMapped from '../../types/IMapped';
import { CourseDetailsEditor } from './CourseDetailsEditor/CourseDetailsEditor';

const dashboard = {
	path: '/dashboard',
	exact: false,
	component: DashBoard,
};

const tableCandidates = {
	path: '/table',
	exact: false,
	component: CandidateTable,
};

const profile = {
	path: '/profile',
	exact: false,
	component: Profile,
};

const scheduleRecruiter = {
	path: '/schedule-recruiter',
	exact: false,
	component: ScheduleRecruiter,
};

const schedulerTechSpecialist = {
	path: '/schedule-techspecialist',
	exact: false,
	component: ScheduleTechSpecialist,
};

const editorCourse = {
	path: '/course-editor',
	exact: false,
	component: CourseEditor,
};
const editorDetailsCourse = {
	path: '/course-details-editor',
	exact: false,
	component: CourseDetailsEditor,
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
	schedulerTechSpecialist,
	editorCourse,
	editorDetailsCourse,
	homePage,
];

export const routesRecruiter: Array<IRoute> = [
	dashboard,
	tableCandidates,
	profile,
	scheduleRecruiter,
	schedulerTechSpecialist,
	homePage,
];

export const routesTechSpecialist: Array<IRoute> = [
	dashboard,
	tableCandidates,
	profile,
	schedulerTechSpecialist,
	homePage,
];

export const routes: IMapped<IRoute[]> = {
	ADMIN: routesAdmin,
	RECRUITER: routesRecruiter,
	SPECIALIST: routesTechSpecialist,
};
