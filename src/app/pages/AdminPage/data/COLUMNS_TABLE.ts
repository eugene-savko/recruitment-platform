import { Column } from 'react-table';

interface IHeaderColumn {
	id: number;
	fullName: string;
	startData: string;
	email: string;
	role: string;
	status: string;
}
const COLUMNS_TABLE: Column<IHeaderColumn>[] = [
	{
		Header: 'Number',
		accessor: 'id',
	},
	{
		Header: 'Registration',
		accessor: 'startData',
	},
	{
		Header: 'Fullname',
		accessor: 'fullName',
	},
	{
		Header: 'Email',
		accessor: 'email',
	},
	{
		Header: 'Role',
		accessor: 'role',
	},
	{
		Header: 'Status',
		accessor: 'status',
	},
];
export default COLUMNS_TABLE;
export type { IHeaderColumn };
