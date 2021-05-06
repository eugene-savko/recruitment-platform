import {
	LastPage as LastPageIcon,
	FirstPage as FirstPageIcon,
	ArrowBackIos as ArrowBackIosIcon,
	ArrowForwardIos as ArrowForwardIosIcon,
} from '@material-ui/icons';

import React, { useCallback, useMemo } from 'react';
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
	const numberPageInputProps = useMemo(() => {
		return { max: pageOptions.length, min: 0 };
	}, [pageOptions]);

	const handleRowPerPage = useCallback((opt: IFilterOption) => {
		const { name } = opt;
		setPageSize(Number(name));
	}, []);
	const getOptionLabel = useCallback(
		(option: IFilterOption) => option.name,
		[]
	);
	const getOptionValue = useCallback(
		(option: IFilterOption) => option.name,
		[]
	);
	// 1
	const handleNumberPage = useCallback(
		(e) => {
			const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
			gotoPage(pageNumber);
		},
		[gotoPage]
	);
	return (
		<TablePaginationList>
			<TablePaginationItem>
				<Label htmlFor="table-pagination__select">Row per page</Label>
				<TablePaginationSelect
					name="table-select"
					classNamePrefix="select"
					id="table-pagination__select"
					value={pageSize}
					options={ROW_PER_PAGE}
					getOptionLabel={getOptionLabel}
					getOptionValue={getOptionValue}
					onChange={handleRowPerPage}
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
					onChange={handleNumberPage}
					inputProps={numberPageInputProps}
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
