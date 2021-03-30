import React, { useState } from 'react';

import { InputLabel, MenuItem, Select } from '@material-ui/core/';
import { SelectStyle } from './component/SelectStyle';

export default function SelectCourse() {
	const [course, setCourse] = useState('');
	const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
		const setValue = event.target.value;
		setCourse(setValue);
	};

	return (
		<SelectStyle variant="outlined">
			<InputLabel id="customized select label">Desired course</InputLabel>
			<Select
				labelId="customized select course"
				id="customized select"
				required
				value={course}
				onChange={handleChange}
				label="Select Course"
			>
				<MenuItem value="course 1">
					<li>course 1</li>
				</MenuItem>
				<MenuItem value="course 2">course 2</MenuItem>
				<MenuItem value="course 3">course 3</MenuItem>
			</Select>
		</SelectStyle>
	);
}
