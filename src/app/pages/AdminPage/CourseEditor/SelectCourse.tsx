import { FormControl, InputLabel, Select } from '@material-ui/core';
import React, { useState } from 'react';

interface ISelect {
	value: string | number;
	name: string;
}
export const SelectCourse: React.FC = () => {
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
		<React.Fragment>
			<FormControl variant="outlined" fullWidth>
				<InputLabel htmlFor="outlined-age-native-simple">
					List of courses
				</InputLabel>
				<Select
					native
					value={course.value}
					onChange={handleChangeCourse}
					label="List of courses"
					inputProps={{
						name: 'value',
						id: 'outlined-age-native-simple',
					}}
				>
					<option value="" disabled>
						List of courses
					</option>
					<option value={1}>JS and Java</option>
					<option value={2}>QA</option>
					<option value={3}>Devops</option>
				</Select>
			</FormControl>
		</React.Fragment>
	);
};
