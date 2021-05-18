import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TodayIcon from '@material-ui/icons/Today';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import IMapped from 'app/types/IMapped';
import ISideBarItems from '../types/ISideBarItems';

const dashboard: ISideBarItems = {
	href: '/dashboard',
	icon: DashboardIcon,
	title: 'DashBoard',
};
const tableCandidate: ISideBarItems = {
	href: '/table',
	icon: PersonIcon,
	title: 'AdminTable',
};
const profile: ISideBarItems = {
	href: '/profile',
	icon: PeopleIcon,
	title: 'Profile',
};
const scheduleRecruiter: ISideBarItems = {
	href: '/schedule-recruiter',
	icon: TodayIcon,
	title: 'Schedule recruiter',
};

const scheduleTechSpecialist: ISideBarItems = {
	href: '/schedule-techspecialist',
	icon: DateRangeIcon,
	title: 'Schedule techspecialist',
};
const courseEditor: ISideBarItems = {
	href: '/course-editor',
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
