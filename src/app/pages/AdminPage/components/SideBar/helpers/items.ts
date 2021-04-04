import {
	BarChart as BarChartIcon,
	Lock as LockIcon,
	Users as UsersIcon,
} from 'react-feather';

export const items = [
	{
		href: '/admin/dashboard',
		icon: BarChartIcon,
		title: 'DashBoard',
	},
	{
		href: '/admin/candidate',
		icon: UsersIcon,
		title: 'Candidate',
	},
	{
		href: '/admin/login',
		icon: LockIcon,
		title: 'Login',
	},
];
