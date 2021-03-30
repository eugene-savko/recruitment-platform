import React, { useState } from 'react';

import { InputLabel, MenuItem, Select } from '@material-ui/core/';
import { SelectStyle } from './component/SelectStyle';

export default function SelectLEvelEnglish() {
	const [level, setLevel] = useState('');
	const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
		const setValue = event.target.value;
		setLevel(setValue);
	};

	return (
		<SelectStyle variant="outlined">
			<InputLabel id="customized select label">English level</InputLabel>
			<Select
				labelId="customized select label"
				id="customized select"
				required
				value={level}
				onChange={handleChange}
				label="English level"
			>
				<MenuItem value="A0">
					<li>Starter</li>
				</MenuItem>
				<MenuItem value="A1">Elementary</MenuItem>
				<MenuItem value="A2">Pre-intermediate</MenuItem>
				<MenuItem value="B1">Intermediate</MenuItem>
				<MenuItem value="B2">Upper-intermediate</MenuItem>
				<MenuItem value="C1">Advanced</MenuItem>
			</Select>
		</SelectStyle>
	);
}
