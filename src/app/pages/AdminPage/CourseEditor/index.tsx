import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField, Button, Box } from '@material-ui/core';
import { CourseEditorWrapperSelect } from './components';
import { CourseEditorPaper } from './components/CourseEditorPaper';
import { SelectCountry } from './SelectCountry';
import { SelectCourse } from './SelectCourse';
import { InlineDatePicker } from './Calendar';
import { SelectMultiRecruiter } from './SelectMultiRecruiter';

export const CourseEditor: React.FC = () => {
	return (
		<CourseEditorPaper>
			<form noValidate>
				<CourseEditorWrapperSelect>
					<SelectCourse />
					<IconButton aria-label="delete">
						<DeleteIcon fontSize="large" />
					</IconButton>
				</CourseEditorWrapperSelect>

				<SelectCountry />

				<SelectMultiRecruiter />

				<Box display="flex">
					<Box mr={2}>
						<InlineDatePicker />
					</Box>
					<Box flexGrow={1}>
						<TextField
							margin="normal"
							fullWidth
							id="outlined-helperText"
							label="Name of course"
							defaultValue=""
							variant="outlined"
						/>
					</Box>
				</Box>

				<TextField
					margin="normal"
					fullWidth
					id="outlined-multiline-static"
					label="Course description"
					multiline
					rows={12}
					defaultValue="Describe course"
					variant="outlined"
				/>
				<Button variant="outlined" color="primary">
					Create course
				</Button>
			</form>
		</CourseEditorPaper>
	);
};
