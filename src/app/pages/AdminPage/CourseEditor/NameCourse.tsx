import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

export const NameCourse: React.FC = () => {
	const { register } = useFormContext();

	return (
		<TextField
			inputRef={register}
			name="nameCourse"
			defaultValue=""
			label="Name of course"
			margin="normal"
			fullWidth
			variant="outlined"
			type="text"
		/>
	);
};
