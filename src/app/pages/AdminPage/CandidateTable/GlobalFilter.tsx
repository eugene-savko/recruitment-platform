import FilterListIcon from '@material-ui/icons/FilterList';
import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import {
	FilterButton,
	TitleFormTable,
	WrapperTable,
	GlobalFilterSelect,
} from './components';
import { InputField } from './InputField';
import { ModalFilter } from './ModalFilter';

import { FILTER_SELECTS, GLOBAL_FILTER_SELECT } from './data';
import { SelectField } from './SelectField';
import { FormTable } from './FormTable';
import { IFilterOption } from './types';

interface IGlobalFilter {
	setFilter: (filter?: IFilterOption | Array<string | IFilterOption>) => void;

	children?: React.ReactNode;
}

const GlobalFilter: React.FunctionComponent<IGlobalFilter> = ({
	setFilter,
	children,
}) => {
	const { register, handleSubmit, control } = useForm();

	// data
	const globalFilterSelectData = useMemo(() => GLOBAL_FILTER_SELECT, []);
	const { primary_skills, tranee_statuses } = useMemo(() => FILTER_SELECTS, []);

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
		<React.Fragment>
			<WrapperTable container justify="flex-end">
				<GlobalFilterSelect
					classNamePrefix="Select"
					options={globalFilterSelectData}
					getOptionLabel={(option: IFilterOption) => option.value}
					getOptionValue={(option: IFilterOption) => option.value}
					onChange={(data: IFilterOption) =>
						handleGlobalFilterSelectChange(data)
					}
					isFocused={false}
					placeholder="Global Filter"
				/>
				<FilterButton color="primary" onClick={handleClickOpen}>
					<FilterListIcon />
				</FilterButton>
				<ModalFilter isShown={open}>
					<FormTable onSubmit={handleSubmit(onSubmit)} close={handleClose}>
						<TitleFormTable>Filter</TitleFormTable>
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
							name="Tranee Status"
							data={tranee_statuses}
						/>
					</FormTable>
				</ModalFilter>
				{children}
			</WrapperTable>
		</React.Fragment>
	);
};
export default GlobalFilter;
