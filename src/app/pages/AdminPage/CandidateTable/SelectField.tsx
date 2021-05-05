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
	return (
		<Controller
			control={control}
			defaultValue={name}
			name={name}
			render={({ onChange, value, ref }) => {
				const getOptionLabel = useCallback(
					(option: IFilterOption) => option.name,
					[value]
				);

				const getOptionValue = useCallback(
					(option: IFilterOption) => option.name,
					[value]
				);
				const handleSelectChange = useCallback(
					(val: Array<IFilterOption>) => {
						onChange(val);
					},
					[value]
				);
				return (
					<SelectFieldWrapper>
						<FormLabel>{name}</FormLabel>
						<FormSelect
							isMulti
							variant="outlined"
							inputRef={ref}
							value={value}
							options={data}
							getOptionLabel={getOptionLabel}
							getOptionValue={getOptionValue}
							onChange={handleSelectChange}
						/>
					</SelectFieldWrapper>
				);
			}}
		/>
	);
};
