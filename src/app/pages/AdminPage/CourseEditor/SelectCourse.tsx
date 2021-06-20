/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import { FormControl, IconButton, InputLabel, Select } from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2';
import { SelectCourseContext } from '../../../contexts/SelectCourseContext';
import {
	deleteCourseDescription,
	deleteNameCourse,
	fetchCurrentCourse,
	fetchListCourses,
} from '../../../API/CourseEditor';
import { CourseInputItem } from '.';
import { CourseEditorWrapperSelect } from './components';

interface ISelect {
	value: string | number;
	name: string;
}

interface IListCourses {
	id: number;
	nameCourse: string;
}

export const SelectCourse: React.FC = () => {
	const { setValue, reset } = useFormContext();
	const { defaultValues, setDefaultValues } = useContext(SelectCourseContext);
	const [listCourses, setListCourses] = useState<IListCourses[]>([]);
	const [course, setCourse] = useState<ISelect>({
		value: '',
		name: 'No course',
	});

	useEffect(() => {
		(async () => {
			setListCourses(await fetchListCourses());
		})();
	}, []);

	useEffect(() => {
		if (course.value !== '') {
			(async () => {
				const courseFromServer = await fetchCurrentCourse(
					course.value as string
				);
				setDefaultValues(courseFromServer);
				for (const key in courseFromServer) {
					setValue(key, courseFromServer[key as CourseInputItem]);
				}
			})();
		}
	}, [course]);

	const handleChangeCourse = (
		event: React.ChangeEvent<{ name?: string; value: unknown }>
	) => {
		const name = event.target.name as keyof typeof course;
		setCourse({ ...course, [name]: event.target.value });
	};

	const onDeleteCourse = () => {
		if (course.value !== '') {
			const filteredCourse = listCourses.filter(
				({ id: courserId }) => courserId !== defaultValues.id
			);
			deleteCourseDescription(defaultValues.id);
			deleteNameCourse(defaultValues.id);
			reset();
			setListCourses(filteredCourse);
			setCourse({ value: '', name: 'No course' });
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: `You try delete non-existent course`,
			});
		}
	};
	return (
		<React.Fragment>
			<CourseEditorWrapperSelect>
				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="outlined-age-native-simple">
						List of courses
					</InputLabel>

					<Select
						native
						value={course.value}
						onChange={handleChangeCourse}
						label="List of courses"
						inputProps={{
							name: 'value',
							id: 'outlined-age-native-simple',
						}}
					>
						<option value="" disabled>
							List of courses
						</option>
						{listCourses.map(({ id, nameCourse }) => (
							<option key={id} value={id}>
								{nameCourse}
							</option>
						))}
					</Select>
				</FormControl>

				<IconButton aria-label="delete" onClick={onDeleteCourse}>
					<DeleteIcon fontSize="large" />
				</IconButton>
			</CourseEditorWrapperSelect>
		</React.Fragment>
	);
};
