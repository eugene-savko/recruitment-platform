import {
	BarChart as BarChartIcon,
	Lock as LockIcon,
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
		href: '/admin/login',
		icon: LockIcon,
		title: 'Login',
	},
	{
		href: '/',
		icon: LogOutIcon,
		title: 'Logout',
	},
];
