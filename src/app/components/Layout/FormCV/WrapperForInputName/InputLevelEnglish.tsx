import  React, { useState } from 'react';

import { InputLabel, MenuItem, Select } from '@material-ui/core/';
import { SelectLevelEng } from './component/SelectLevelEng';


export default function InputLevelEnglish() {	
	const [level, setLevel] = useState('');
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {		
		// eslint-disable-next-line prettier/prettier
		setLevel(event.target.value as string);
	};

	return (
		<SelectLevelEng variant="outlined">
			<InputLabel id="customized select label">English level</InputLabel>
			<Select
				labelId="customized select label"
				id="customized select"
				value={level}
				onChange={handleChange}				
				label="English level"				
			>
				<MenuItem value='A0'>
					<em>Starter</em>
				</MenuItem>
				<MenuItem value='A1'>Elementary</MenuItem>
				<MenuItem value='A2'>Pre-intermediate</MenuItem>
				<MenuItem value='B1'>Intermediate</MenuItem>
				<MenuItem value='B2'>Upper-intermediate</MenuItem>
				<MenuItem value='C1'>Advanced</MenuItem>				
			</Select>
		</SelectLevelEng>
	);
}
