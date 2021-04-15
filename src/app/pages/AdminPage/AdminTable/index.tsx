import { TableBody, TableHead } from '@material-ui/core';
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS_TABLE, DATA_TABLE } from '../data';
import { IHeaderColumn } from '../data/types';
import { MaterialTable } from './components';
import MaterialTableCell from './components/MaterialTableCell';

export const AdminTable: React.FunctionComponent = () => {
	const columns = useMemo(() => COLUMNS_TABLE, []);
	const data = useMemo(() => DATA_TABLE, []);
	const tableInstance = useTable<IHeaderColumn>({ columns, data });
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = tableInstance;
	return (
		<MaterialTable {...getTableProps()}>
			<TableHead>
				{
					// Loop over the header rows
					headerGroups.map((headerGroup) => (
						// Apply the header row props
						<tr {...headerGroup.getHeaderGroupProps()}>
							{
								// Loop over the headers in each row
								headerGroup.headers.map((column) => (
									// Apply the header cell props
									<th {...column.getHeaderProps()}>
										{
											// Render the header
											column.render('Header')
										}
									</th>
								))
							}
						</tr>
					))
				}
			</TableHead>
			{/* Apply the table body props */}
			<TableBody {...getTableBodyProps()}>
				{
					// Loop over the table rows
					rows.map((row) => {
						// Prepare the row for display
						prepareRow(row);
						return (
							// Apply the row props
							<tr {...row.getRowProps()}>
								{
									// Loop over the rows cells
									row.cells.map((cell) => {
										// Apply the cell props
										return (
											<MaterialTableCell {...cell.getCellProps()}>
												{
													// Render the cell contents
													cell.render('Cell')
												}
											</MaterialTableCell>
										);
									})
								}
							</tr>
						);
					})
				}
			</TableBody>
		</MaterialTable>
	);
};
