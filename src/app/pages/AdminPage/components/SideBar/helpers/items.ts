import {
	BarChart as BarChartIcon,
	LogOut as LogOutIcon,
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
		href: '/',
		icon: LogOutIcon,
		title: 'Logout',
	},
];
