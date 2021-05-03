import { TableBody, TableHead } from '@material-ui/core';
import React, { useCallback, useMemo, useState } from 'react';
import {
	useTable,
	useFilters,
	usePagination,
	useGlobalFilter,
	Row,
	IdType,
	useSortBy,
} from 'react-table';

import { DATA_TABLE } from './data';

import { Table, TableCell, TableHeaderRow, TableRow } from './components';

import TableColumns, { IBodyRow } from './TableColumns';
import ColumnFilter from './Filters/ColumnFilter';
import TraineeFilter from './TraineeFilter';
import { TablePagination } from './TablePagination';
import { IFilterOption } from './types';

export const CandidateTable: React.FunctionComponent = () => {
	// Data From Server
	const columns = useMemo(() => TableColumns, []);
	const data = useMemo(() => DATA_TABLE, []);

	// State Data Table
	const [tableData] = useState(data);
	// Default Column
	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFilter,
		};
	}, []);
	// Global Filter Function(experimental)
	const ourGlobalFilterFunction = useCallback(
		(
			rows: Row<IBodyRow>[],
			ids: IdType<string | Extract<keyof IBodyRow, string>>[],
			query: IFilterOption
		) => {
			const { value, id } = query;

			if (id) {
				const arrValues = value.split(' ');
				switch (value) {
					case 'Java & Javascript Internship':
						return rows.filter((row) =>
							arrValues.includes(row.values.primary_skill)
						);
					case 'Ruby & Javascript Internship':
						return rows.filter((row) =>
							arrValues.includes(row.values.primary_skill)
						);
					default:
						return rows;
				}
			}
			return rows;
		},
		[]
	);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		setPageSize,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageCount,
		gotoPage,
		pageOptions,
		prepareRow,
		setGlobalFilter,
		state,
	} = useTable(
		{
			columns,
			data: tableData,
			defaultColumn,
			globalFilter: ourGlobalFilterFunction,
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);
	const { pageIndex, pageSize } = state;

	return (
		<TraineeFilter setFilter={setGlobalFilter}>
			<Table {...getTableProps()}>
				<TableHead>
					{headerGroups.map((headerGroup) => (
						<TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
								</th>
							))}
						</TableHeaderRow>
					))}
				</TableHead>

				<TableBody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<TableCell {...cell.getCellProps()}>
											{cell.render('Cell')}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
			<TablePagination
				nextPage={nextPage}
				previousPage={previousPage}
				canNextPage={canNextPage}
				canPreviousPage={canPreviousPage}
				pageCount={pageCount}
				gotoPage={gotoPage}
				pageOptions={pageOptions}
				pageIndex={pageIndex}
				pageSize={pageSize}
				setPageSize={setPageSize}
			/>
		</TraineeFilter>
	);
};
