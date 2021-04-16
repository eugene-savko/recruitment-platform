import { Column } from 'react-table';
import ColumnFilter from '../ColumnFilter';
import PrimarySkillFilters from '../PrimarySkillFilters';
import StatusFilters from '../StatusFilters';

interface IBodyRow {
	id: number;
	fullName: string;
	primarySkill: string;
	registration: string;
	email: string;
	status: string;
	buttonTitle: string;
}

const COLUMNS_TABLE: Column<IBodyRow>[] = [
	{
		Header: 'Full Name',
		accessor: 'fullName',
		Filter: ColumnFilter,
		filter: 'includes',
	},
	{
		Header: 'Email',
		accessor: 'email',
		disableFilters: true,
	},
	{
		Header: 'Primary Skill',
		accessor: 'primarySkill',
		Filter: PrimarySkillFilters,
		filter: 'includes',
	},
	{
		Header: 'Status',
		accessor: 'status',
		Filter: StatusFilters,
		filter: 'includes',
	},
];
export default COLUMNS_TABLE;
export type { IBodyRow };
