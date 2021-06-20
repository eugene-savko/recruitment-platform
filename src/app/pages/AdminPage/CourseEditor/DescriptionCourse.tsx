import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CourseEditorError } from './CourseEditorError';

export const DescriptionCourse: React.FC = () => {
	const { register, errors } = useFormContext();
	return (
		<React.Fragment>
			<TextField
				style={{ marginBottom: '0' }}
				name="courseDescription"
				inputRef={register({
					minLength: {
						value: 20,
						message: 'Description must be more then 20 characters',
					},
				})}
				margin="normal"
				fullWidth
				id="outlined-multiline-static"
				label="Course description"
				multiline
				rows={6}
				variant="outlined"
			/>
			<CourseEditorError
				nameInputElement={errors.courseDescription}
				messageError={errors.courseDescription?.message}
			/>
		</React.Fragment>
	);
};
