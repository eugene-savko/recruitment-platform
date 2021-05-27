import EditIcon from '@material-ui/icons/Edit';
import TodayIcon from '@material-ui/icons/Today';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import IMapped from 'app/types/IMapped';
import ISideBarItems from '../types/ISideBarItems';
import { AdminRoutePath } from '../../routes';

const dashboard: ISideBarItems = {
	href: AdminRoutePath.DASHBOARD,
	icon: DashboardIcon,
	title: 'DashBoard',
};
const tableCandidate: ISideBarItems = {
	href: AdminRoutePath.TABLE,
	icon: PersonIcon,
	title: 'AdminTable',
};

const scheduleRecruiter: ISideBarItems = {
	href: AdminRoutePath.SCHEDULE_RECRUITER,
	icon: TodayIcon,
	title: 'Schedule',
};

const courseEditor: ISideBarItems = {
	href: AdminRoutePath.COURSE_EDITOR,
	icon: EditIcon,
	title: 'Course editor',
};

export const menuItemsAdmin: ISideBarItems[] = [
	dashboard,
	tableCandidate,
	scheduleRecruiter,
	courseEditor,
];
export const menuItemsRecruiter: ISideBarItems[] = [
	dashboard,
	tableCandidate,
	scheduleRecruiter,
];
export const menuItemsTechSpecialist: ISideBarItems[] = [
	dashboard,
	tableCandidate,
	scheduleRecruiter,
];

export const menuItemsList: IMapped<ISideBarItems[]> = {
	ADMIN: menuItemsAdmin,
	RECRUITER: menuItemsRecruiter,
	SPECIALIST: menuItemsTechSpecialist,
};
