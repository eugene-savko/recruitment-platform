import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export const RadionButtonRole: React.FC = () => {
	const [value, setValue] = React.useState('RECRUITER');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};
	return (
		<FormControl component="fieldset">
			<RadioGroup
				style={{
					display: 'flex',
					flexWrap: 'nowrap',
					flexDirection: 'row',
				}}
				aria-label="roles"
				name="roles"
				value={value}
				onChange={handleChange}
			>
				<FormControlLabel
					style={{ marginRight: '10px' }}
					value="RECRUITER"
					control={<Radio color="primary" />}
					label="Recruiter"
					labelPlacement="start"
				/>
				<FormControlLabel
					color="primary"
					value="SPECIALIST"
					control={<Radio color="primary" />}
					label="Specialist"
					labelPlacement="end"
				/>
			</RadioGroup>
		</FormControl>
	);
};
