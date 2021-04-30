import { TableBody, TableHead } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
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

import {
	Table,
	TableCell,
	TableHeaderRow,
	TableRow,
	WrapperCandidateTable,
} from './components';

import COLUMNS_TABLE, { IBodyRow } from './data/COLUMNS_TABLE';

import GlobalFilter from './GlobalFilter';
import { TablePagination } from './TablePagination';
import { IFilterOption } from './types';
import ColumnFilter from './Filters/ColumnFilter';

export const CandidateTable: React.FunctionComponent = () => {
	// data
	const columns = useMemo(() => COLUMNS_TABLE, []);
	const data = useMemo(() => DATA_TABLE, []);

	// defaultcolumn
	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFilter,
		};
	}, []);
	// Global Filter Function
	const ourGlobalFilterFunction = useCallback(
		(
			rows: Row<IBodyRow>[],
			ids: IdType<string | Extract<keyof IBodyRow, string>>[],
			query: IFilterOption
		) => {
			console.log(query);
			const { value, id } = query;
			console.log(rows);
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
		{ columns, data, defaultColumn, globalFilter: ourGlobalFilterFunction },
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);
	const { pageIndex, pageSize } = state;

	return (
		<WrapperCandidateTable>
			<GlobalFilter setFilter={setGlobalFilter}>
				<Table {...getTableProps()}>
					<TableHead>
						{
							// Loop over the header rows
							headerGroups.map((headerGroup) => (
								// Apply the header row props
								<TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
									{
										// Loop over the headers in each row
										headerGroup.headers.map((column) => (
											// Apply the header cell props
											<th
												{...column.getHeaderProps(
													column.getSortByToggleProps()
												)}
											>
												{
													// Render the header
													column.render('Header')
												}
												<span>
													{column.isSorted
														? column.isSortedDesc
															? ' 🔽'
															: ' 🔼'
														: ''}
												</span>
											</th>
										))
									}
								</TableHeaderRow>
							))
						}
					</TableHead>
					{/* Apply the table body props */}
					<TableBody {...getTableBodyProps()}>
						{
							// Loop over the table rows
							page.map((row) => {
								// Prepare the row for display
								prepareRow(row);
								return (
									// Apply the row props
									<TableRow {...row.getRowProps()}>
										{
											// Loop over the rows cells
											row.cells.map((cell) => {
												// Apply the cell props
												return (
													<TableCell {...cell.getCellProps()}>
														{
															// Render the cell contents
															cell.render('Cell')
														}
													</TableCell>
												);
											})
										}
									</TableRow>
								);
							})
						}
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
			</GlobalFilter>
		</WrapperCandidateTable>
	);
};
