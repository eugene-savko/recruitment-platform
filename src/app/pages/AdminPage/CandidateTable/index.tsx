import React, { useState, useCallback, useEffect } from 'react';
// material
import { TableBody, TableHead } from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons/';
// react-hook-form
import { useForm } from 'react-hook-form';
// data
import { DATA_TABLE, FILTER_SELECTS, GLOBAL_FILTER_SELECT } from 'app/data/';
// requests
import { fetchInternships } from 'app/API/intenships';
// react table
import {
	useTable,
	useFilters,
	usePagination,
	useGlobalFilter,
	Row,
	IdType,
	useSortBy,
} from 'react-table';
// components
import TableColumns, { IBodyRow } from './TableColumns';
import { InputField } from './InputField';
import { TableFilter } from './TableFilter';
import { SelectField } from './SelectField';
import { TableForm } from './TableForm';
import { TablePagination } from './TablePagination';
// types
import { IFilterOption } from './types';
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
	trainee_status: Array<IFilterOption>;
	primary_skills: Array<IFilterOption>;
}
interface IInternshipTableData {
	internshipId: number | null;
	userId?: number;
	fullName?: string | null;
	specialityIds?: Array<Record<string, number | null>>;
	statusNames?: Array<Record<string, string | null>>;
	pageNumber?: number;
	pageSize?: number;
}

export const CandidateTable: React.FunctionComponent = () => {
	// Use Table
	const [candidates] = useState(DATA_TABLE);
	// Global Filter Function(experimental)
	const GlobalFilterFunction = useCallback(
		(
			rows: Row<IBodyRow>[],
			ids: IdType<string | Extract<keyof IBodyRow, string>>[],
			query: IFilterOption
		) => {
			return rows;
		},
		[candidates]
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
			columns: TableColumns,
			data: candidates,
			globalFilter: GlobalFilterFunction,
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);
	const { pageIndex, pageSize } = state;

	// Use Form
	const { register, handleSubmit, control } = useForm();

	// temporary data;
	const { primary_skills, trainee_status } = FILTER_SELECTS;

	const initialState = {
		internshipId: null,
		fullName: null,
		pageNumber: 1,
		pageSize: 10,
	};
	// states
	const [open, setOpen] = useState(false);
	const [internships, setInternships] = useState<Array<IFilterOption>>([]);
	const [tableData, setTableData] = useState<IInternshipTableData>(
		initialState
	);
	const [options, setOptions] = useState<IFilterOptions>({
		trainee_status,
		primary_skills,
	});
	// effects
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchInternships();
				setInternships(data);
			} catch (e) {
				setInternships(GLOBAL_FILTER_SELECT);
			}
		};
		fetchData();
	}, []);
	// events
	const onSubmit = useCallback(
		(data) => {
			setTableData((prev) => ({
				...prev,
				fullName: data['Full Name'] ? data['Full Name'] : null,
				statusNames: data['Trainee Status'],
				specialityIds: data['Primary Skill'],
			}));
			setGlobalFilter(data);
		},
		[tableData]
	);

	const getOptionLabel = useCallback(
		(option: IFilterOption) => option.name,
		[]
	);

	const getOptionValue = useCallback(
		(option: IFilterOption) => option.name,
		[]
	);

	const handleClickOpen = useCallback(() => {
		setOpen(!open);
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);

	const handleGlobalFilterSelectChange = useCallback((data: IFilterOption) => {
		setTableData((prev) => ({
			...prev,
			internship: Number(data.id),
		}));
		// temporary
		switch (data.id) {
			case 1:
				setOptions((prev) => ({
					...prev,
					primary_skills: primary_skills.filter(
						(elem) => elem.id === 1 || elem.id === 2
					),
				}));
				break;
			case 2:
				setOptions((prev) => ({
					...prev,
					primary_skills: primary_skills.filter(
						(elem) => elem.id === 2 || elem.id === 3
					),
				}));
				break;
			case 3:
				setOptions((prev) => ({
					...prev,
					primary_skills: primary_skills.filter((elem) => elem.id === 1),
				}));
				break;
			case 4:
				setOptions((prev) => ({
					...prev,
					skills: primary_skills.filter((elem) => elem.id === 3),
				}));
				break;
			case 5:
				setOptions((prev) => ({
					...prev,
					primary_skills: primary_skills.filter((elem) => elem.id === 1),
				}));
				break;
			case 6:
			case 7:
				setOptions((prev) => ({
					...prev,
					primary_skills: primary_skills.filter((elem) => elem.id === 4),
				}));
				break;
			case 8:
				setOptions((prev) => ({
					...prev,
					primary_skills: primary_skills.filter((elem) => elem.id === 5),
				}));
				break;
			case 9:
				setOptions((prev) => ({
					...prev,
					primary_skills: primary_skills.filter((elem) => elem.id === 6),
				}));
				break;
			default:
				return;
		}
		setGlobalFilter(data);
	}, []);
	return (
		<WrapperCandidateTable container>
			<PaperTable>
				<InternshipFilterSelect
					classNamePrefix="select"
					options={internships}
					getOptionLabel={getOptionLabel}
					getOptionValue={getOptionValue}
					onChange={handleGlobalFilterSelectChange}
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
							name="Full Name"
							type="text"
							placeholder="Full Name"
						/>
						<SelectField
							control={control}
							name="Primary Skill"
							data={options.primary_skills}
						/>
						<SelectField
							control={control}
							name="Trainee Status"
							data={options.trainee_status}
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
			</PaperTable>
		</WrapperCandidateTable>
	);
};
