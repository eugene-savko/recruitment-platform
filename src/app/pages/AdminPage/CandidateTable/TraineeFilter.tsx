import FilterListIcon from '@material-ui/icons/FilterList';
import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
import { fetchInternships } from './API/intenships';

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
	const globalFilterSelectData = GLOBAL_FILTER_SELECT;
	const { primary_skills, trainee_status } = FILTER_SELECTS;

	const [open, setOpen] = useState(false);
	const [internships, setInternships] = useState<Array<IFilterOption>>([]);
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchInternships();
			setInternships(data);
			console.log(data);
		};
		fetchData();
	}, []);
	const onSubmit = useCallback(
		(data: IFilterOption) => {
			setFilter(data);
		},
		[filter]
	);

	const getOptionLabel = useCallback((option: IFilterOption) => option.name, [
		filter,
	]);

	const getOptionValue = useCallback((option: IFilterOption) => option.name, [
		filter,
	]);
	const handleClickOpen = useCallback(() => {
		setOpen(!open);
	}, [open]);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, [open]);

	const handleGlobalFilterSelectChange = useCallback(
		(data: IFilterOption) => {
			setFilter(data);
		},
		[filter]
	);
	return (
		<WrapperCandidateTable container>
			<PaperTable>
				<InternshipFilterSelect
					classNamePrefix="Select"
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
