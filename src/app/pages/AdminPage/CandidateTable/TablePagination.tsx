import {
	LastPage as LastPageIcon,
	FirstPage as FirstPageIcon,
	ArrowBackIos as ArrowBackIosIcon,
	ArrowForwardIos as ArrowForwardIosIcon,
} from '@material-ui/icons';

import React, { useCallback } from 'react';
import { ROW_PER_PAGE } from 'app/data';
import {
	NumberPageTextField,
	TablePaginationButton,
	TablePaginationItem,
	TablePaginationList,
	TablePaginationSelect,
	TablePaginationSelectLabel,
} from './components';
import { IRowPerPageOption } from './types';
import { IInternshipTableData, IPaginationData } from './index';

interface ITablePagination {
	pageOptions: number | undefined;
	paginationData: IPaginationData;
	setPaginationData: React.Dispatch<React.SetStateAction<IPaginationData>>;
	setTableData: React.Dispatch<React.SetStateAction<IInternshipTableData>>;
}

export const TablePagination: React.FunctionComponent<ITablePagination> = ({
	paginationData,
	setTableData,
}) => {
	const { pageSize, pageNumber, totalPageNumber } = paginationData;

	const handleRowPerPage = useCallback((opt: IRowPerPageOption) => {
		const { name } = opt;
		setTableData((prev) => ({
			...prev,
			pageSize: Number(name),
			pageNumber: 0,
		}));
	}, []);
	const getOptionLabel = useCallback(
		(option: IRowPerPageOption) => option.name,
		[]
	);
	const getOptionValue = useCallback(
		(option: IRowPerPageOption) => option.name,
		[]
	);
	const goToFirstPage = () => {
		setTableData((prev) => ({
			...prev,
			pageNumber: 0,
		}));
	};
	const goToLastPage = () => {
		setTableData((prev) => ({
			...prev,
			pageNumber: totalPageNumber - 1,
		}));
	};
	const nextPage = () => {
		setTableData((prev) => ({
			...prev,
			pageNumber:
				pageNumber < totalPageNumber - 1 ? pageNumber + 1 : pageNumber,
		}));
	};
	const previousPage = () => {
		setTableData((prev) => ({
			...prev,
			pageNumber: pageNumber && pageNumber - 1,
		}));
	};
	return (
		<TablePaginationList>
			<TablePaginationItem>
				<TablePaginationSelectLabel htmlFor="table-pagination__select">
					Row per page
				</TablePaginationSelectLabel>
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
				<NumberPageTextField>
					<strong>Page:</strong> {pageNumber + 1} of {totalPageNumber}
				</NumberPageTextField>
			</TablePaginationItem>

			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={goToFirstPage}
					disabled={pageNumber === 0}
				>
					<FirstPageIcon />
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={previousPage}
					disabled={pageNumber === 0}
				>
					<ArrowBackIosIcon />
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={nextPage}
					disabled={pageNumber === totalPageNumber - 1}
				>
					<ArrowForwardIosIcon />
				</TablePaginationButton>
			</TablePaginationItem>
			<TablePaginationItem>
				<TablePaginationButton
					type="button"
					onClick={goToLastPage}
					disabled={pageNumber === totalPageNumber - 1}
				>
					<LastPageIcon />
				</TablePaginationButton>
			</TablePaginationItem>
		</TablePaginationList>
	);
};
