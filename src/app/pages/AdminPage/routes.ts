import IRoute from 'app/types/IRoute';
import { Candidate } from './components/LayautAdmin/Candidate/Candidate';
import { DashBoard } from './components/LayautAdmin/DashBoard/DashBoard';

const routesAdmin: Array<IRoute> = [
	{
		path: '/admin/candidate',
		exact: false,
		component: Candidate,
	},
	{
		path: '/admin/dashboard',
		exact: false,
		component: DashBoard,
	},
];

export default routesAdmin;
