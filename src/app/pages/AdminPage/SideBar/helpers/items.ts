import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TodayIcon from '@material-ui/icons/Today';
import PeopleIcon from '@material-ui/icons/People';
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
const profile: ISideBarItems = {
	href: AdminRoutePath.PROFILE,
	icon: PeopleIcon,
	title: 'Profile',
};
const scheduleRecruiter: ISideBarItems = {
	href: AdminRoutePath.SCHEDULE_RECRUITER,
	icon: TodayIcon,
	title: 'Schedule recruiter',
};

const scheduleTechSpecialist: ISideBarItems = {
	href: AdminRoutePath.SCHEDULE_TECHSPECIALIST,
	icon: DateRangeIcon,
	title: 'Schedule techspecialist',
};
const courseEditor: ISideBarItems = {
	href: AdminRoutePath.COURSE_EDITOR,
	icon: EditIcon,
	title: 'Course Editor',
};

export const items: ISideBarItems[] = [
	dashboard,
	tableCandidate,
	profile,
	scheduleRecruiter,
	scheduleTechSpecialist,
	courseEditor,
];

export const menuItemsAdmin: ISideBarItems[] = [
	dashboard,
	tableCandidate,
	profile,
	scheduleRecruiter,
	scheduleTechSpecialist,
	courseEditor,
];
export const menuItemsRecruiter: ISideBarItems[] = [
	dashboard,
	tableCandidate,
	profile,
	scheduleRecruiter,
	scheduleTechSpecialist,
];
export const menuItemsTechSpecialist: ISideBarItems[] = [
	dashboard,
	tableCandidate,
	profile,
	scheduleTechSpecialist,
];

export const menuItemsList: IMapped<ISideBarItems[]> = {
	ADMIN: menuItemsAdmin,
	RECRUITER: menuItemsRecruiter,
	SPECIALIST: menuItemsTechSpecialist,
};
