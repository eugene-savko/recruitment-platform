import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid } from '@material-ui/core';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import dateFormat from 'dateformat';

import { CourseEditorWrapperSelect } from './components';
import { CourseEditorPaper } from './components/CourseEditorPaper';
import { SelectCountry } from './SelectCountry';
import { SelectCourse } from './SelectCourse';
import { Calendar } from './Calendar';
import { NameCourse } from './NameCourse';
import { SetRecruiter } from './SetRecruiter';
import { DescriptionCourse } from './DescriptionCourse';
import { createCourse } from '../../../API/CourseEditor';
import { SelectCourseContext } from '../../../contexts/SelectCourseContext';

interface IListContry {
	id: number;
	name: string;
	iso2?: string;
}
interface IListCity {
	id: number;
	name: string;
}
export interface IListInterviewers {
	recruiter: string;
	idRecruiter: number;
}
export interface IDefaultCourseInput {
	id?: number;
	courseId?: number;
	nameCourse: string;
	country: IListContry;
	cities: IListCity[];
	endDate: string | number;
	startDate: string | number;
	stopRecruitmentDate: string | number;
	listRecruiters: IListInterviewers[];
	courseDescription: string;
}

export type CourseInputItem = keyof IDefaultCourseInput;

export const CourseEditor: React.FC = () => {
	const { defaultValues } = useContext(SelectCourseContext);

	// console.log('defaultValues', defaultValues);

	const methods = useForm<IDefaultCourseInput>({
		defaultValues,
	});

	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<IDefaultCourseInput> = (data) => {
		createCourse(data);
		console.log(data);
	};
	return (
		<React.Fragment>
			<FormProvider {...methods}>
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
						<NameCourse />
						<SelectCountry />

						<Grid
							container
							direction="row"
							justify="space-between"
							alignItems="center"
						>
							<Grid item>
								<Calendar
									name="startDate"
									label="Start course"
									id="startDateCourse"
								/>
							</Grid>
							<Grid item>
								<Calendar
									name="endDate"
									label="End course"
									id="endDateCourse"
								/>
							</Grid>
							<Grid item>
								<Calendar
									name="stopRecruitmentDate"
									label="Finish of recruitment"
									id="stopRecruitmentDateCourse"
								/>
							</Grid>
						</Grid>

						<SetRecruiter />

						<DescriptionCourse />

						<Button
							style={{ marginRight: '16px', marginTop: '8px' }}
							type="submit"
							variant="outlined"
							color="primary"
						>
							Create course
						</Button>

						<Button
							style={{ marginTop: '8px' }}
							type="submit"
							variant="outlined"
							color="primary"
						>
							Update course
						</Button>
					</form>
				</CourseEditorPaper>
			</FormProvider>
		</React.Fragment>
	);
};
