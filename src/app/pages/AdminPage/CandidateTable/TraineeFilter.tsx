import FilterListIcon from '@material-ui/icons/FilterList';
import React, { useState, useMemo } from 'react';
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

interface ITraineeFilter {
	setFilter: (filter?: IFilterOption | Array<string | IFilterOption>) => void;

	children?: React.ReactNode;
}

const TraineeFilter: React.FunctionComponent<ITraineeFilter> = ({
	setFilter,
	children,
}) => {
	const { register, handleSubmit, control } = useForm();

	// data
	const globalFilterSelectData = useMemo(() => GLOBAL_FILTER_SELECT, []);
	const { primary_skills, trainee_status } = useMemo(() => FILTER_SELECTS, []);

	const onSubmit = (data: IFilterOption) => {
		setFilter(data);
	};

	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(!open);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleGlobalFilterSelectChange = (data: IFilterOption) => {
		setFilter(data);
	};
	return (
		<WrapperCandidateTable container>
			<PaperTable>
				<InternshipFilterSelect
					classNamePrefix="Select"
					options={globalFilterSelectData}
					getOptionLabel={(option: IFilterOption) => option.value}
					getOptionValue={(option: IFilterOption) => option.value}
					onChange={(data: IFilterOption) =>
						handleGlobalFilterSelectChange(data)
					}
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
