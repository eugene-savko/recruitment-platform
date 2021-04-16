import { Paper, TableBody, TableHead } from '@material-ui/core';
import React, { useCallback, useMemo } from 'react';
import {
	useTable,
	useFilters,
	usePagination,
	useGlobalFilter,
	Row,
	IdType,
} from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import { COLUMNS_TABLE, DATA_TABLE } from './data';

import {
	PaperTable,
	Table,
	TableCell,
	TableHeaderRow,
	TablePagination,
	TablePaginationSelect,
	TablePaginationSelectWrapper,
	TableRow,
	WrapperTable,
} from './components';

import ColumnFilter from './ColumnFilter';
import GlobalFilter from './GlobalFilter';
import { IBodyRow } from './data/COLUMNS_TABLE';

export const AdminTable: React.FunctionComponent = () => {
	const columns = useMemo(() => COLUMNS_TABLE, []);
	const data = useMemo(() => DATA_TABLE, []);
	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFilter,
		};
	}, []);
	const ourGlobalFilterFunction = useCallback(
		(
			rows: Row<IBodyRow>[],
			ids: IdType<string | Extract<keyof IBodyRow, string>>[],
			query: string
		) => {
			const arrayQuery = query.split(' ');
			if (query === '') {
				return rows;
			}
			return rows.filter((row) => arrayQuery.includes(row.values.primarySkill));
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
		preGlobalFilteredRows,
		state,
	} = useTable(
		{ columns, data, defaultColumn, globalFilter: ourGlobalFilterFunction },
		useFilters,
		useGlobalFilter,
		usePagination
	);
	const { globalFilter, pageIndex, pageSize } = state;

	return (
		<WrapperTable>
			<PaperTable>
				<GlobalFilter
					filter={globalFilter}
					setFilter={setGlobalFilter}
					preGlobalFilteredRows={preGlobalFilteredRows}
				>
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
												<th {...column.getHeaderProps()}>
													{
														// Render the header
														column.render('Header')
													}
													<div>
														{column.canFilter ? column.render('Filter') : null}
													</div>
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

					<TablePagination>
						<label htmlFor="table-pagination__select">Row per page</label>
						<TablePaginationSelectWrapper>
							<TablePaginationSelect
								name="table-select"
								id="table-pagination__select"
								value={pageSize}
								onChange={(e) => setPageSize(Number(e.target.value))}
							>
								{[5, 10, 20].map((pages) => (
									<option key={uuidv4()} value={pages}>
										{pages}
									</option>
								))}
							</TablePaginationSelect>
						</TablePaginationSelectWrapper>
						<span>
							Page:{' '}
							<strong>
								{pageIndex + 1} of {pageOptions.length}
							</strong>
						</span>
						<span>
							<input
								type="number"
								defaultValue={pageIndex + 1}
								onChange={(e) => {
									const pageNumber = e.target.value
										? Number(e.target.value) - 1
										: 0;
									gotoPage(pageNumber);
								}}
								style={{ width: '50px' }}
							/>
						</span>
						<button
							type="button"
							onClick={() => gotoPage(0)}
							disabled={!canPreviousPage}
						>
							{'<<'}
						</button>
						<button
							type="button"
							onClick={previousPage}
							disabled={!canPreviousPage}
						>
							Previous
						</button>
						<button type="button" onClick={nextPage} disabled={!canNextPage}>
							Next
						</button>
						<button
							type="button"
							onClick={() => gotoPage(pageCount - 1)}
							disabled={!canNextPage}
						>
							{'>>'}
						</button>
					</TablePagination>
				</GlobalFilter>
			</PaperTable>
		</WrapperTable>
	);
};
