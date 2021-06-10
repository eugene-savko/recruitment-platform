import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export const DescriptionCourse: React.FC = () => {
	const { register } = useFormContext();

	return (
		<TextField
			name="courseDescription"
			inputRef={register}
			margin="normal"
			fullWidth
			id="outlined-multiline-static"
			label="Course description"
			multiline
			rows={6}
			defaultValue=""
			variant="outlined"
		/>
	);
};
