import React from 'react';
import { Column } from 'react-table';
import { TableCellButton } from './TableCellButton';
import { TableHeaderButton } from './TableHeaderButton';

interface IBodyRow {
	id: number;
	full_name: string;
	primary_skill: string;
	country: string;
	status: string;
	go_to_button: string;
}

const TableColumns: Column<IBodyRow>[] = [
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Full Name" />;
		},
		accessor: 'full_name',
	},
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Primary Skill" />;
		},
		accessor: 'primary_skill',
	},
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Country" />;
		},
		accessor: 'country',
	},
	{
		Header: (): JSX.Element => {
			return <TableHeaderButton text="Status" />;
		},
		accessor: 'status',
	},
	{
		Header: 'Profile',
		accessor: 'go_to_button',
		Cell: ({ cell }) => <TableCellButton text={cell.row.values.go_to_button} />,
	},
];
export default TableColumns;
export type { IBodyRow };
