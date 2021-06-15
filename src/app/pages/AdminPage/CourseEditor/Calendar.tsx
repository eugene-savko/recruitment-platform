import React, { useContext } from 'react';
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
	const { control, setValue, errors } = useFormContext();
	return (
		<React.Fragment>
			<Controller
				control={control}
				name={name}
				rules={{
					validate: {
						correctDate: (value) => {
							return (
								new Date(value).getTime() > new Date().getTime() ||
								'You cannot select a past date'
							);
						},
					},
				}}
				render={({ onChange, value }) => {
					return (
						<TextField
							style={{ marginBottom: '0' }}
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

			{/* <CourseEditorError
				nameInputElement={errors[name]}
				messageError={errors[name].message}
			/> */}

			{errors[name] && (
				<p style={{ margin: '0', color: 'red', fontSize: '12px' }}>
					{errors[name].message}
				</p>
			)}

			{/* <CourseEditorError
				nameInputElement={errors[name]}
				messageError={errors.cities?.[name]}
			/> */}
		</React.Fragment>
	);
};
