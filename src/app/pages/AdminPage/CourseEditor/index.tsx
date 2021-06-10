import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Grid } from '@material-ui/core';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { CourseEditorWrapperSelect } from './components';
import { CourseEditorPaper } from './components/CourseEditorPaper';
import { SelectCountry } from './SelectCountry';
import { SelectCourse } from './SelectCourse';
import { Calendar } from './Calendar';
import { NameCourse } from './NameCourse';
import { SetRecruiter } from './SetRecruiter';
import { DescriptionCourse } from './DescriptionCourse';

interface IListContry {
	id: number;
	name: string;
	iso2?: string;
}
interface IListCity {
	id: number;
	name: string;
}
interface IListInterviewers {
	idRecruiter: number;
	recruiter: string;
}
export interface IFormInput {
	country: IListContry;
	nameCourse: string;
	cities: IListCity[];
	endDate: string;
	startDate: string;
	stopRecruitmentDate: string;
	listRecruiters: IListInterviewers[];
	courseDescription: string;
}

export const defaultValues = {
	nameCourse: 'JavaScript & Java',
	country: { id: 21, name: 'Belarus', iso2: 'BY' },
	cities: [{ id: 15989, name: 'Minsk' }],
	endDate: '2021-01-01T00:00',
	startDate: '2021-01-01T00:00',
	stopRecruitmentDate: '2021-01-01T00:00',
	listRecruiters: [{ idRecruiter: 2, recruiter: 'Luck Cage' }],
	courseDescription:
		'3-5 years of experience in technical program management, preferably in a related industry. Senior only, expert in Jira, certified (PMP and /or CSM/PSM) or equivalent TPM experience.',
};

export const CourseEditor: React.FC = () => {
	const methods = useForm<IFormInput>({
		defaultValues,
	});

	const { handleSubmit } = methods;

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
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
							style={{ marginRight: '16px' }}
							type="submit"
							variant="outlined"
							color="primary"
						>
							Create course
						</Button>

						<Button type="submit" variant="outlined" color="primary">
							Update course
						</Button>
					</form>
				</CourseEditorPaper>
			</FormProvider>
		</React.Fragment>
	);
};
