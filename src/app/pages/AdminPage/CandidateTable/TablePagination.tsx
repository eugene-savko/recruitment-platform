import { Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import {
	Label,
	TablePaginationButton,
	TablePaginationItem,
	TablePaginationList,
	TablePaginationSelect,
} from './components';
import { ROW_PER_PAGE } from './data';
import { IFilterOption } from './types';

interface ITablePagination {
	nextPage: () => void;
	previousPage: () => void;
	canNextPage: boolean;
	canPreviousPage: boolean;
	pageCount: number;
	gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
	pageOptions: number[];
	pageIndex: number;
	pageSize: number;
	setPageSize: (pageSize: number) => void;
}
export const TablePagination: React.FunctionComponent<ITablePagination> = ({
	nextPage,
	previousPage,
	canNextPage,
	canPreviousPage,
	pageCount,
	gotoPage,
	pageOptions,
	pageIndex,
	pageSize,
	setPageSize,
}) => {
	const rowPerPage = useMemo(() => ROW_PER_PAGE, []);
	const handleRowPerPage = (opt: IFilterOption) => {
		const { value } = opt;
		setPageSize(Number(value));
	};
	return (
		<TablePaginationList>
			<TablePaginationItem>
				<Label htmlFor="table-pagination__select">Row per page</Label>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationSelect
					name="table-select"
					classNamePrefix="Select"
					id="table-pagination__select"
					value={pageSize}
					placeholder={pageSize}
					options={rowPerPage}
					getOptionLabel={(option: IFilterOption) => option.value}
					getOptionValue={(option: IFilterOption) => option.value}
					onChange={(opt: IFilterOption) => handleRowPerPage(opt)}
				/>
			</TablePaginationItem>
			<TablePaginationItem>
				<Typography>
					Page:{' '}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>
				</Typography>
			</TablePaginationItem>
			<TablePaginationItem>
				<Typography>
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
				</Typography>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				>
					{'<<'}
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={previousPage}
					disabled={!canPreviousPage}
				>
					Previous
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={nextPage}
					disabled={!canNextPage}
				>
					Next
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					{'>>'}
				</TablePaginationButton>
			</TablePaginationItem>
		</TablePaginationList>
	);
};
