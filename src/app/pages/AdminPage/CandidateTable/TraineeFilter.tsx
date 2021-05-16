import FilterListIcon from '@material-ui/icons/FilterList';
import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { fetchInternships } from 'app/API/intenships';
import {
	ModalFilterButton,
	TableFormTitle,
	InternshipFilterSelect,
	WrapperCandidateTable,
	PaperTable,
} from './components';
import { InputField } from './InputField';
import { ModalFilter } from './ModalFilter';

import { FILTER_SELECTS, GLOBAL_FILTER_SELECT } from './data';
import { SelectField } from './SelectField';
import { TableForm } from './TableForm';
import { IFilterOption } from './types';

interface ITraineeFilter {
	filter: IFilterOption | Array<string | IFilterOption>;
	setFilter: (filter?: IFilterOption | Array<string | IFilterOption>) => void;
	children?: React.ReactNode;
}

const TraineeFilter: React.FunctionComponent<ITraineeFilter> = ({
	filter,
	setFilter,
	children,
}) => {
	const { register, handleSubmit, control } = useForm();

	// temporary data;
	const { primary_skills, trainee_status } = FILTER_SELECTS;

	const [open, setOpen] = useState(false);
	const [internships, setInternships] = useState<Array<IFilterOption>>([]);
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
	const onSubmit = useCallback((data: IFilterOption) => {
		setFilter(data);
	}, []);

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
		setFilter(data);
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
					placeholder="Internship Filter"
				/>
				<ModalFilterButton color="primary" onClick={handleClickOpen}>
					<FilterListIcon />
				</ModalFilterButton>
				<ModalFilter isShown={open}>
					<TableForm onSubmit={handleSubmit(onSubmit)} close={handleClose}>
						<TableFormTitle>Filter</TableFormTitle>
						<InputField
							ref={register}
							id="full-name"
							name="Full Name"
							type="text"
							placeholder="Full Name"
						/>
						<SelectField
							control={control}
							name="Primary Skill"
							data={primary_skills}
						/>
						<SelectField
							control={control}
							name="Trainee Status"
							data={trainee_status}
						/>
					</TableForm>
				</ModalFilter>
				{children}
			</PaperTable>
		</WrapperCandidateTable>
	);
};
export default TraineeFilter;
