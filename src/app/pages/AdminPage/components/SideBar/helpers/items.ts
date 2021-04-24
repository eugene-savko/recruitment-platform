import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TodayIcon from '@material-ui/icons/Today';
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';

export const items = [
	{
		href: '/dashboard',
		icon: DashboardIcon,
		title: 'DashBoard',
	},
	{
		href: '/candidate',
		icon: PersonIcon,
		title: 'Candidate',
	},
	{
		href: '/profile',
		icon: PeopleIcon,
		title: 'Profile',
	},
	{
		href: '/schedule-recruiter',
		icon: TodayIcon,
		title: 'Schedule recruiter',
	},
	{
		href: '/schedule-techspecialist',
		icon: DateRangeIcon,
		title: 'Schedule techspecialist',
	},
	{
		href: '/course-editor',
		icon: EditIcon,
		title: 'Course Editor',
	},
];
