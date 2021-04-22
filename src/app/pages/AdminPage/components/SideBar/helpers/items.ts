// import {
// 	BarChart as BarChartIcon,
// 	Users as UsersIcon,
// 	User as UserIcon,
// } from 'react-feather';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TodayIcon from '@material-ui/icons/Today';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';

export const items = [
	{
		href: '/admin/dashboard',
		icon: DashboardIcon,
		title: 'DashBoard',
	},
	{
		href: '/admin/candidate',
		icon: PersonIcon,
		title: 'Candidate',
	},
	{
		href: '/admin/profile',
		icon: PeopleIcon,
		title: 'Profile',
	},
	{
		href: '/admin/schedule-recruiter',
		icon: TodayIcon,
		title: 'Schedule recruiter',
	},
	{
		href: '/admin/schedule-techspecialist',
		icon: DateRangeIcon,
		title: 'Schedule techspecialist',
	},
];
