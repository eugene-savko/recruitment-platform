import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import { CourseEditorError } from './CourseEditorError';

export const NameCourse: React.FC = () => {
	const { register, errors } = useFormContext();

	return (
		<React.Fragment>
			<TextField
				style={{ marginBottom: '0px' }}
				inputRef={register({
					required: 'Fill in the field',
					minLength: {
						value: 10,
						message: 'Minimum length 10 characters',
					},
				})}
				name="nameCourse"
				label="Name of course"
				margin="normal"
				fullWidth
				variant="outlined"
				type="text"
			/>

			<CourseEditorError
				nameInputElement={errors.nameCourse}
				messageError={errors.nameCourse?.message}
			/>
		</React.Fragment>
	);
};
