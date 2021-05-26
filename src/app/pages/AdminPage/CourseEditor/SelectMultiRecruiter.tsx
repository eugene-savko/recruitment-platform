import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const names = [
	'Oliver Hansen',
	'Van Henry',
	'April Tucker',
	'Ralph Hubbard',
	'Omar Alexander',
	'Carlos Abbott',
	'Miriam Wagner',
	'Bradley Wilkerson',
	'Virginia Andrews',
	'Kelly Snyder',
];

export const SelectMultiRecruiter: React.FC = () => {
	const [personName, setPersonName] = useState<string[]>([]);

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setPersonName(event.target.value as string[]);
	};

	return (
		<div>
			<FormControl margin="normal" fullWidth variant="outlined">
				<InputLabel htmlFor="multiple-recruiter-label">
					List of recruiter
				</InputLabel>
				<Select
					label="List of recruiter "
					id="multiple-recruiter"
					multiple
					value={personName}
					onChange={handleChange}
					renderValue={(selected) => (
						<div style={{ display: 'flex', flexWrap: 'wrap' }}>
							{(selected as string[]).map((value) => (
								<Chip key={value} label={value} style={{ margin: 2 }} />
							))}
						</div>
					)}
				>
					{names.map((name) => (
						<MenuItem key={name} value={name}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
