/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import { FormControl, InputLabel, Select } from '@material-ui/core';
import React, { useState, useEffect, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { SelectCourseContext } from '../../../contexts/SelectCourseContext';
import {
	fetchCurrentCourse,
	fetchListCourses,
} from '../../../API/CourseEditor';
import { CourseInputItem } from '.';

interface ISelect {
	value: string | number;
	name: string;
}

export const SelectCourse: React.FC = () => {
	const [course, setCourse] = useState<ISelect>({
		value: '',
		name: 'No course',
	});

	const [listCourses, setListCourses] = useState([]);
	const { setDefaultValues } = useContext(SelectCourseContext);
	const { setValue } = useFormContext();

	// const changeCourseInput = () => {};
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

				setValue('nameCourse', courseFromServer.nameCourse);
			})();
		}
	}, [course]);

	const handleChangeCourse = (
		event: React.ChangeEvent<{ name?: string; value: unknown }>
	) => {
		const name = event.target.name as keyof typeof course;
		setCourse({ ...course, [name]: event.target.value });
	};
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
};
