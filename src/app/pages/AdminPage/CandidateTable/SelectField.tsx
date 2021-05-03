import React from 'react';
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
			render={({ onChange, value, ref }) => (
				<SelectFieldWrapper>
					<FormLabel>{name}</FormLabel>
					<FormSelect
						variant="outlined"
						inputRef={ref}
						value={value}
						options={data}
						getOptionLabel={(option: IFilterOption) => option.value}
						getOptionValue={(option: IFilterOption) => option.value}
						isMulti
						onChange={(val: Array<IFilterOption>) => {
							onChange(val);
						}}
					/>
				</SelectFieldWrapper>
			)}
		/>
	);
};
