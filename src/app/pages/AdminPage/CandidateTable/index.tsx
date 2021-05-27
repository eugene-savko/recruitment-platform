import React, { useState, useCallback, useEffect } from 'react';
// material
import { TableBody, TableHead } from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons/';
// react-hook-form
import { useForm } from 'react-hook-form';
// data
import { FILTER_SELECTS, GLOBAL_FILTER_SELECT } from 'app/data/';
// requests
import { getListInternships } from 'app/API/getListInternships';
import { getFilterOptions } from 'app/API/getFilterOptions';
// react table
import {
	useTable,
	useFilters,
	usePagination,
	useGlobalFilter,
	useSortBy,
} from 'react-table';
// components
import { getAllUsers, ITableUser } from 'app/API/getAllUsers';
import { TRAINEE_STATUSES } from 'app/data/dictionaries/TRAINEE_STATUSES';

import TableColumns from './TableColumns';
import { InputField } from './InputField';
import { TableFilter } from './TableFilter';
import { SelectField } from './SelectField';
import { TableForm } from './TableForm';
import { TablePagination } from './TablePagination';
// types
import { IStatusOption, ISpecialityOption, IInternshipOption } from './types';
// styled components
import {
	Table,
	TableCell,
	TableHeaderRow,
	TableRow,
	ModalFilterButton,
	FormTitle,
	InternshipFilterSelect,
	WrapperCandidateTable,
	PaperTable,
} from './components';

// interfaces
interface IFilterOptions {
	statuses: Array<IStatusOption>;
	specialities: Array<ISpecialityOption>;
}
export interface IPaginationData {
	pageSize: number;
	pageNumber: number;
	totalPageNumber: number;
}
export interface IInternshipTableData {
	internshipId: number | string;
	specialityIds?: Array<number> | null;
	statuses?: Array<number> | null;
	fullName?: string;
	pageNumber?: number;
	pageSize: number;
	totalPageNumber?: number;
}

export const CandidateTable: React.FunctionComponent = () => {
	// initial Data
	const initialDataTable = [
		{
			internshipRequestId: 1,
			userId: 1,
			fullName: '',
			specialityName: '',
			countryName: '',
			statusName: '',
			profile: '',
		},
	];
	const initialState = {
		internshipId: '',
		specialityIds: null,
		statuses: null,
		fullName: '',
		pageNumber: 0,
		pageSize: 10,
	};
	// Use Table
	const [candidates, setCandidates] = useState<Array<ITableUser>>(
		initialDataTable
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		pageOptions,
	} = useTable(
		{
			columns: TableColumns,
			data: candidates,
			manualPagination: true,
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	// Use Form
	const { register, handleSubmit, control } = useForm();

	// temporary data;
	const { specialities, statuses } = FILTER_SELECTS;

	// states
	const [open, setOpen] = useState(false);
	const [internships, setInternships] = useState<Array<IInternshipOption>>([]);
	const [tableData, setTableData] = useState<IInternshipTableData>(
		initialState
	);
	const [options, setOptions] = useState<IFilterOptions>({
		statuses,
		specialities,
	});
	const [paginationData, setPaginationData] = useState({
		pageSize: 10,
		pageNumber: 0,
		totalPageNumber: 0,
	});

	useEffect(() => {
		const fetchInternships = async () => {
			try {
				const data = await getListInternships();
				setInternships(data);
			} catch (e) {
				setInternships(GLOBAL_FILTER_SELECT);
			}
		};
		fetchInternships();
	}, []);

	useEffect(() => {
		const fetchTableData = async () => {
			try {
				// setOptions
				const { internshipId } = tableData;
				const opt = await getFilterOptions(internshipId);
				const newOpt = {
					...opt,
					statuses: opt.statuses.map((elem, i) => ({
						...elem,
						id: i,
						status: `${TRAINEE_STATUSES[`${elem.status}`]}`,
					})),
				};
				setOptions(newOpt);

				// set Candidates
				const {
					internshipRequests,
					pageNumber,
					// eslint-disable-next-line no-shadow
					pageSize,
					totalPageNumber,
				} = await getAllUsers(tableData);

				const users = internshipRequests.map((elem) => ({
					...elem,
					fullName: `${elem.firstName} ${elem.lastName}`,
					statusName: `${TRAINEE_STATUSES[`${elem.statusName}`]}`,
				}));
				setPaginationData((prev) => ({
					...prev,
					totalPageNumber,
					pageNumber,
					pageSize,
				}));
				setCandidates(users);
			} catch (e) {
				console.log(e.message);
			}
		};
		fetchTableData();
	}, [tableData]);
	// events
	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);
	// submit Form
	const onSubmit = useCallback(
		(data) => {
			setTableData((prev) => ({
				...prev,
				internshipId: !prev.internshipId ? 1 : prev.internshipId,
				fullName: data.fullName ? data.fullName : '',
				statuses:
					data.statuses === 'statuses'
						? null
						: data.statuses.map((elem: { status: string }) =>
								Object.keys(TRAINEE_STATUSES).find(
									(k) => TRAINEE_STATUSES[k] === elem.status
								)
						  ),
				specialityIds:
					data.specialityIds === 'specialityIds'
						? null
						: data.specialityIds.map((elem: { id: number }) => elem.id),
				pageNumber: paginationData.pageNumber,
				pageSize: paginationData.pageSize,
			}));
			handleClose();
		},
		[tableData]
	);

	const getOptionLabel = useCallback(
		(option: IInternshipOption) => option.name,
		[]
	);

	const getOptionValue = useCallback(
		(option: IInternshipOption) => option.name,
		[]
	);

	const handleClickOpen = useCallback(() => {
		setOpen(!open);
	}, []);

	const handleGlobalFilterSelectChange = useCallback(
		(data: IInternshipOption) => {
			setTableData({
				...initialState,
				internshipId: Number(data.id),
			});
		},
		[]
	);
	return (
		<WrapperCandidateTable container>
			<PaperTable>
				<InternshipFilterSelect
					classNamePrefix="select"
					options={internships}
					getOptionLabel={getOptionLabel}
					getOptionValue={getOptionValue}
					onChange={handleGlobalFilterSelectChange}
					maxMenuHeight={157}
					isFocused={false}
					placeholder="Сhoose an internship"
				/>
				<ModalFilterButton color="primary" onClick={handleClickOpen}>
					<FilterListIcon />
				</ModalFilterButton>
				<TableFilter isShown={open}>
					<TableForm onSubmit={handleSubmit(onSubmit)} close={handleClose}>
						<FormTitle>Filter</FormTitle>
						<InputField
							ref={register}
							id="fullName"
							name="fullName"
							type="text"
							placeholder="Full Name"
						/>
						<SelectField
							control={control}
							name="specialityIds"
							label="Primary Skills"
							data={options.specialities}
						/>
						<SelectField
							control={control}
							name="statuses"
							label="Trainee Status"
							data={options.statuses}
						/>
					</TableForm>
				</TableFilter>

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
					pageOptions={pageOptions.length}
					paginationData={paginationData}
					setPaginationData={setPaginationData}
					setTableData={setTableData}
				/>
			</PaperTable>
		</WrapperCandidateTable>
	);
};
