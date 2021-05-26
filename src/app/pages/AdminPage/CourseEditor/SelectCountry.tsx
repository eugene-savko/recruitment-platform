import { FormControl, InputLabel, Select } from '@material-ui/core';
import React, { useState } from 'react';

interface ISelect {
	value: string | number;
	name: string;
}

export const SelectCountry: React.FC = () => {
	const [course, setCourse] = useState<ISelect>({
		value: '',
		name: 'No course',
	});

	const handleChangeCourse = (
		event: React.ChangeEvent<{ name?: string; value: unknown }>
	) => {
		const name = event.target.name as keyof typeof course;
		setCourse({ ...course, [name]: event.target.value });
	};

	return (
		<FormControl margin="normal" variant="outlined" fullWidth>
			<InputLabel htmlFor="outlined-age-native-simple">
				List of country
			</InputLabel>
			<Select
				native
				value={course.value}
				onChange={handleChangeCourse}
				label="List of country"
				inputProps={{
					name: 'value',
					id: 'outlined-age-native-simple',
				}}
			>
				<option value="" disabled>
					List of country
				</option>
				<option value={1}>Belarus</option>
				<option value={2}>Ukraine</option>
				<option value={4}>Poland</option>
				<option value={5}>Russia</option>
				<option value={6}>Latvia</option>
			</Select>
		</FormControl>
	);
};
