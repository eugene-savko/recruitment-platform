import {
	BarChart as BarChartIcon,
	Users as UsersIcon,
	User as UserIcon,
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
		href: '/admin/profile',
		icon: UserIcon,
		title: 'Profile',
	},
];
