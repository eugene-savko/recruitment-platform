import React from 'react';
import { ITableUser } from 'app/API/getAllUsers';
import { CellProps, Column } from 'react-table';
import { TableCellButton } from './TableCellButton';
import { TableHeaderButton } from './TableHeaderButton';

const TableColumns: Column<ITableUser>[] = [
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Full Name" />;
		},
		accessor: 'fullName',
	},
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Primary Skill" />;
		},
		accessor: 'specialityName',
	},
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Country" />;
		},
		accessor: 'countryName',
	},
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Status" />;
		},
		accessor: 'statusName',
	},
	{
		Header: 'Profile',
		accessor: 'profile',
		disableSortBy: true,
		Cell: ({
			cell,
		}: React.PropsWithChildren<
			CellProps<ITableUser, string | undefined>
		>): JSX.Element => {
			const { internshipRequestId } = cell.row.original;
			return <TableCellButton text="View" id={internshipRequestId} />;
		},
	},
];
export default TableColumns;
export type { ITableUser };
