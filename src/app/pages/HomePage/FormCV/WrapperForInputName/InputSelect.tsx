import React, { useState } from 'react';

// styles
import { InputLabel, MenuItem, Select } from '@material-ui/core/';
import { SelectStyle } from './component/SelectStyle';

// interface
import ISelectNameData from './types/ISelectNameData';

interface ISelectProps {
	selectItemsData: Array<ISelectNameData>;
}

export const InputSelect: React.FunctionComponent<ISelectProps> = ({
	selectItemsData,
}) => {
	const [course, setCourse] = useState('');
	const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
		// Syntax error Prettire
		const setValue = event.target.value;
		setCourse(setValue);
	};

	return (
		<SelectStyle variant="outlined">
			<InputLabel id="customized select label">
				{selectItemsData[0].title}
			</InputLabel>
			<Select
				labelId="customized select course"
				id="customized select"
				required
				value={course}
				onChange={handleChange}
				label={selectItemsData[0].title}
			>
				{selectItemsData?.map((item) => (
					<MenuItem value={item.name}>
						<span>{item.name}</span>
					</MenuItem>
				))}
			</Select>
		</SelectStyle>
	);
};
