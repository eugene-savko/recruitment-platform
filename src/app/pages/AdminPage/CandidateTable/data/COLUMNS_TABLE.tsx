import { Column } from 'react-table';
import React from 'react';
import { TableCellButton } from '../TableCellButton';

interface IBodyRow {
	id: number;
	full_name: string;
	primary_skill: string;
	country: string;
	status: string;
	go_to_button: string;
}

const COLUMNS_TABLE: Column<IBodyRow>[] = [
	{
		Header: 'Full Name',
		accessor: 'full_name',
	},
	{
		Header: 'Primary Skill',
		accessor: 'primary_skill',
	},
	{
		Header: 'Country',
		accessor: 'country',
	},
	{
		Header: 'Status',
		accessor: 'status',
	},
	{
		Header: 'Go To Profile',
		accessor: 'go_to_button',
		Cell: ({ cell }) => (
			<TableCellButton>{cell.row.values.go_to_button}</TableCellButton>
		),
	},
];
export default COLUMNS_TABLE;
export type { IBodyRow };
