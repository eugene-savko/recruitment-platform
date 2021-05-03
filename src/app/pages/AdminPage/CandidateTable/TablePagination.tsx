import {
	LastPage as LastPageIcon,
	FirstPage as FirstPageIcon,
	ArrowBackIos as ArrowBackIosIcon,
	ArrowForwardIos as ArrowForwardIosIcon,
} from '@material-ui/icons';

import React, { useMemo } from 'react';
import {
	Label,
	NumberPageInput,
	NumberTablePage,
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
				<TablePaginationSelect
					name="table-select"
					classNamePrefix="Select"
					id="table-pagination__select"
					value={pageSize}
					options={rowPerPage}
					getOptionLabel={(option: IFilterOption) => option.value}
					getOptionValue={(option: IFilterOption) => option.value}
					onChange={(opt: IFilterOption) => handleRowPerPage(opt)}
					placeholder={pageSize}
				/>
			</TablePaginationItem>
			<TablePaginationItem>
				<NumberTablePage>
					<strong>Page:</strong> {pageIndex + 1} of {pageOptions.length}
				</NumberTablePage>
			</TablePaginationItem>
			<TablePaginationItem>
				<NumberPageInput
					type="number"
					defaultValue={pageIndex + 1}
					onChange={(e) => {
						const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
						gotoPage(pageNumber);
					}}
					inputProps={{ max: pageOptions.length, min: 0 }}
					disableUnderline
				/>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				>
					<FirstPageIcon />
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={previousPage}
					disabled={!canPreviousPage}
				>
					<ArrowBackIosIcon />
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={nextPage}
					disabled={!canNextPage}
				>
					<ArrowForwardIosIcon />
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					<LastPageIcon />
				</TablePaginationButton>
			</TablePaginationItem>
		</TablePaginationList>
	);
};
