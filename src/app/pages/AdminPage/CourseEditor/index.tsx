import React, { useContext } from 'react';
import { Button, Grid } from '@material-ui/core';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Swal from 'sweetalert2';

import { CourseEditorPaper } from './components/CourseEditorPaper';
import { SelectCountry } from './SelectCountry';
import { SelectCourse } from './SelectCourse';
import { Calendar } from './Calendar';
import { NameCourse } from './NameCourse';
import { SetRecruiter } from './SetRecruiter';
import { DescriptionCourse } from './DescriptionCourse';
import { createCourse, updateCourse } from '../../../API/CourseEditor';
import { SelectCourseContext } from '../../../contexts/SelectCourseContext';
import { CourseDetailsEditor } from '../CourseDetailsEditor/CourseDetailsEditor';

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
	courseEditorDetails: string;
}

export type CourseInputItem = keyof IDefaultCourseInput;

export const CourseEditor: React.FC = () => {
	const { defaultValues } = useContext(SelectCourseContext);

	const methods = useForm<IDefaultCourseInput>({
		defaultValues,
	});
	const { handleSubmit, getValues } = methods;

	const onSubmit: SubmitHandler<IDefaultCourseInput> = (data) => {
		console.log(data);
		if (data.nameCourse === defaultValues.nameCourse) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `You cant use this button to update course`,
			});
		} else {
			createCourse(data);
			Swal.fire({
				icon: 'success',
				text: `You successfully create course`,
			});
		}
	};

	const onUpdateCourse = () => {
		const values = getValues();
		const mergedUpdatedCourseInput = { ...defaultValues, ...values };
		updateCourse(defaultValues.id, mergedUpdatedCourseInput);
		Swal.fire({
			icon: 'success',
			text: `You successfully updated course`,
		});
	};

	return (
		<React.Fragment>
			<FormProvider {...methods}>
				<CourseEditorPaper>
					<SelectCourse />
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

						<CourseDetailsEditor />

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
							type="button"
							variant="outlined"
							color="primary"
							onClick={onUpdateCourse}
						>
							Update course
						</Button>
					</form>
				</CourseEditorPaper>
			</FormProvider>
		</React.Fragment>
	);
};
