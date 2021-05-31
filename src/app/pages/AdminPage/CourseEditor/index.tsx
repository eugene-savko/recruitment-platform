import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { TextField, Button, Box } from '@material-ui/core';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { CourseEditorWrapperSelect } from './components';
import { CourseEditorPaper } from './components/CourseEditorPaper';
import { SelectCountry } from './SelectCountry';
import { SelectCourse } from './SelectCourse';
import { InlineDatePicker } from './Calendar';
import { SelectMultiRecruiter } from './SelectMultiRecruiter';

export interface IFormInput {
	select: string;
	nameCourse: string;
	cities: string;
}

const defaultValues = {
	select: '',
	nameCourse: '',
	cities: '',
};

export const CourseEditor: React.FC = () => {
	const { control, handleSubmit, register } = useForm<IFormInput>({
		defaultValues,
	});

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
	};
	return (
		<React.Fragment>
			<CourseEditorPaper>
				<CourseEditorWrapperSelect>
					<SelectCourse />
					<IconButton aria-label="delete">
						<DeleteIcon fontSize="large" />
					</IconButton>
				</CourseEditorWrapperSelect>
			</CourseEditorPaper>

			<CourseEditorPaper>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Box display="flex">
						<Box flexGrow={1} mr={2}>
							<SelectCountry />
						</Box>
						<Box flexGrow={1}>
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
						</Box>
					</Box>

					{/* <Box display="flex" justifyContent="space">
						<Box>
							<InlineDatePicker />
						</Box>
						<Box>
							<InlineDatePicker />
						</Box>
						<Box>
							<InlineDatePicker />
						</Box>
					</Box> */}

					{/* <SelectMultiRecruiter />

					<TextField
						margin="normal"
						fullWidth
						id="outlined-multiline-static"
						label="Course description"
						multiline
						rows={12}
						defaultValue="Describe course"
						variant="outlined"
					/> */}
					<Button type="submit" variant="outlined" color="primary">
						Create course
					</Button>
				</form>
			</CourseEditorPaper>
		</React.Fragment>
	);
};
