import React, { useCallback } from 'react';
import { Control, FieldValues, Controller } from 'react-hook-form';
import { FormSelect, FormLabel, SelectFieldWrapper } from './components';
import { IFilterOption } from './types';

interface ISelectField {
	data: Array<IFilterOption>;
	name: string;
	control: Control<FieldValues>;
}

export const SelectField: React.FunctionComponent<ISelectField> = ({
	data,
	control,
	name,
}) => {
	const renderSelect = useCallback(({ onChange, value, ref }) => {
		const getOptionLabel = useCallback((option: IFilterOption) => {
			return option.name;
		}, []);

		const getOptionValue = useCallback((option: IFilterOption) => {
			return option.name;
		}, []);
		const handleSelectChange = useCallback((val: Array<IFilterOption>) => {
			onChange(val);
		}, []);
		return (
			<SelectFieldWrapper>
				<FormLabel>{name}</FormLabel>
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
