interface IBodyRow {
	id: number;
	fullName: string;
	startData: string;
	email: string;
	role: string;
	status: string;
}

const DATA_TABLE: IBodyRow[] = [
	{
		id: 1,
		fullName: 'Evvy Kubiczek',
		startData: '14.4.2021',
		email: 'ekubiczek0@odnoklassniki.ru',
		role: 'interviewer',
		status: 'waiting',
	},
	{
		id: 2,
		fullName: 'Garrek Girogetti',
		startData: '14.4.2021',
		email: 'ggirogetti1@elpais.com',
		role: 'interviewer',
		status: 'finished',
	},
	{
		id: 3,
		fullName: 'Chery Sheasby',
		startData: '16.4.2021',
		email: 'csheasby2@go.com',
		role: 'interviewer',
		status: 'active',
	},
	{
		id: 4,
		fullName: 'Harriette Westhoff',
		startData: '15.4.2021',
		email: 'hwesthoff3@nifty.com',
		role: 'recruiter',
		status: 'waiting',
	},
	{
		id: 5,
		fullName: 'Edeline Painter',
		startData: '14.4.2021',
		email: 'epainter4@usa.gov',
		role: 'trainee',
		status: 'active',
	},
	{
		id: 6,
		fullName: 'Sibylle Hilliam',
		startData: '15.4.2021',
		email: 'shilliam5@prweb.com',
		role: 'recruiter',
		status: 'waiting',
	},
];

export default DATA_TABLE;
export type { IBodyRow };
