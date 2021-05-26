import React, { useCallback } from 'react';
import { Control, FieldValues, Controller } from 'react-hook-form';
import { FormSelect, FormLabel, SelectFieldWrapper } from './components';
import { ISpecialityOption, IStatusOption } from './types';

interface ISelectField {
	data: Array<IStatusOption | ISpecialityOption>;
	name: string;
	label: string;
	control: Control<FieldValues>;
}

export const SelectField: React.FunctionComponent<ISelectField> = ({
	data,
	control,
	name,
	label,
}) => {
	const renderSelect = useCallback(({ onChange, value, ref }) => {
		const getOptionLabel = useCallback((option) => {
			if (option.name) {
				return option.name;
			}
			return option.status;
		}, []);

		const getOptionValue = useCallback((option) => {
			if (option.name) {
				return option.name;
			}
			return option.status;
		}, []);
		const handleSelectChange = useCallback(
			(val: Array<IStatusOption | ISpecialityOption>) => {
				onChange(val);
			},
			[]
		);
		return (
			<SelectFieldWrapper>
				<FormLabel>{label}</FormLabel>
				<FormSelect
					isMulti
					variant="outlined"
					inputRef={ref}
					value={value}
					options={data}
					classNamePrefix="select"
					getOptionLabel={getOptionLabel}
					getOptionValue={getOptionValue}
					onChange={handleSelectChange}
					placeholder="All Options"
				/>
			</SelectFieldWrapper>
		);
	}, []);
	return (
		<Controller
			control={control}
			defaultValue={name}
			name={name}
			render={renderSelect}
		/>
	);
};
