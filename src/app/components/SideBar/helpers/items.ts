import {
	BarChart as BarChartIcon,
	Lock as LockIcon,
	Users as UsersIcon,
} from 'react-feather';

export const items = [
	{
		href: '/app/dashboard',
		icon: BarChartIcon,
		title: 'Dashboard',
	},
	{
		href: '/app/customers',
		icon: UsersIcon,
		title: 'Customers',
	},
	{
		href: '/login',
		icon: LockIcon,
		title: 'Login',
	},
];
