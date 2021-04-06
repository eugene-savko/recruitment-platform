import React from 'react';

import { CheckboxOne } from './components/CheckBox';

export function CheckBoxing({ id, text }: { id: string; text: string }) {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	return (
		<label htmlFor={id}>
			<CheckboxOne
				id={id}
				onChange={handleChange}
				color="default"
				inputProps={{ 'aria-label': 'checkbox with default color' }}
				required
			/>

			<span style={{ cursor: 'pointer' }}>{text}</span>
		</label>
	);
}
