import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import dateFormat from 'dateformat';

interface ICalendar {
	name: string;
	label: string;
	id: string;
}

export const Calendar: React.FunctionComponent<ICalendar> = ({
	name,
	label,
	id,
}: ICalendar) => {
	const { control, setValue } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={dateFormat(new Date(), "yyyy-mm-dd'T'HH:MM")}
			render={({ onChange, value }) => {
				return (
					<TextField
						name={name}
						label={label}
						onChange={(e) => {
							onChange(e.target.value);
							setValue(`${name}`, new Date(e.target.value).getTime());
						}}
						value={dateFormat(new Date(value), "yyyy-mm-dd'T'HH:MM")}
						margin="normal"
						id={id}
						variant="outlined"
						type="datetime-local"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				);
			}}
		/>
	);
};
