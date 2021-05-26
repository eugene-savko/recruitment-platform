import React, { useContext, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { authContext } from 'app/contexts/AuthLoggedContext';
import { SwitcherRolesContext } from 'app/contexts/SwitcherRolesContext';

export const RadionButtonRole: React.FC = () => {
	const { switchedRole, setSwitchedRole } = useContext(SwitcherRolesContext);
	const [value, setValue] = React.useState(switchedRole);
	const { auth } = useContext(authContext);
	const role = auth.dataRole?.role as string;

	useEffect(() => {
		setSwitchedRole?.(role === 'SPECIALIST' ? 'SPECIALIST' : 'RECRUITER');
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
		setSwitchedRole?.((event.target as HTMLInputElement).value);
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
					label="Recruiters"
					labelPlacement="start"
				/>
				<FormControlLabel
					color="primary"
					value="SPECIALIST"
					control={<Radio color="primary" />}
					label="Specialists"
					labelPlacement="end"
				/>
			</RadioGroup>
		</FormControl>
	);
};
