import React, { useCallback, useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { fetchUsers } from 'app/API/users';
import { fetchSpecialties } from 'app/API/specialties';
import { fetchSkills } from 'app/API/skills';
import { API } from 'app/API/axios';
import { URL_CREATE_INTERNSHIPS } from 'app/API/urls';
import { cities } from './data/cities';
import { countries } from './data/countries';
import {
	WrapperForm,
	Form,
	FormButton,
	FormInput,
	FormLabel,
	FormSelect,
	WrapperFormInput,
	WrapperTextField,
} from './сomponents';
import { IUsers, ISpecialties, ISkills } from './types';

export const CourseEditor: React.FunctionComponent = () => {
	const { register, handleSubmit, control, reset } = useForm();
	const [editText, setEditText] = useState('');
	const [users, setUsers] = useState<Array<IUsers>>([]);
	const [specialities, setSpecialities] = useState<Array<ISpecialties>>([]);
	const [skills, setSkills] = useState<Array<ISkills>>([]);

	const onSubmit = useCallback(
		({
			nameCourse,
			deadline,
			startDate,
			endDate,
			countries: formCountries,
			cities: formCities,
			users: formUsers,
			specialities: formSpecialities,
			skills: formSkills,
		}) => {
			const formDescription = editText;
			const newData = {
				name: nameCourse,
				description: formDescription,
				deadline: new Date(deadline).getTime(),
				startDate: new Date(startDate).getTime(),
				endDate: new Date(endDate).getTime(),
				countries: formCountries,
				cities: formCities,
				users: formUsers?.map(({ id }: IUsers) => id),
				specialities: formSpecialities?.map(({ id }: ISpecialties) => id),
				skills: formSkills?.map(({ id }: ISpecialties) => id),
			};

			const fetchCreateIntership = async () => {
				await API({
					method: 'post',
					url: URL_CREATE_INTERNSHIPS,
					data: JSON.stringify(newData),
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
					},
				});
			};
			fetchCreateIntership();
			reset();
		},
		[editText]
	);

	//  all recruiter and specialists
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchUsers();
				setUsers(data);
			} catch (e) {
				alert(e);
			}
		};
		fetchData();
	}, []);

	//  specialties
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchSpecialties();

				setSpecialities(data);
			} catch (e) {
				alert(e);
			}
		};
		fetchData();
	}, []);

	//  skills
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchSkills();
				setSkills(data);
			} catch (e) {
				alert(e);
			}
		};
		fetchData();
	}, []);

	return (
		<WrapperForm>
			<h2>Course editor</h2>
			<Form onSubmit={handleSubmit(onSubmit)} noValidate>
				<WrapperFormInput>
					<FormLabel>New Course</FormLabel>
					<Controller
						name="nameCourse"
						control={control}
						defaultValue="Name new course"
						as={FormInput}
					/>
				</WrapperFormInput>

				<FormLabel>Country</FormLabel>
				<Controller
					placeholder="Select country"
					defaultValue={[]}
					isMulti
					as={FormSelect}
					control={control}
					name="countries"
					getOptionValue={(option: string) => option}
					getOptionLabel={(option: string) => option}
					options={countries}
				/>

				<FormLabel>City</FormLabel>
				<Controller
					placeholder="Select city"
					defaultValue={[]}
					isMulti
					as={FormSelect}
					control={control}
					name="cities"
					getOptionValue={(option: string) => option}
					getOptionLabel={(option: string) => option}
					options={cities}
				/>

				<FormLabel>Specialty</FormLabel>
				<Controller
					placeholder="Select specialties"
					isMulti
					defaultValue={[]}
					as={FormSelect}
					control={control}
					name="specialities"
					getOptionValue={(option: ISpecialties) => option.name}
					getOptionLabel={(option: ISpecialties) => option.name}
					options={specialities}
				/>

				<FormLabel>Skill</FormLabel>
				<Controller
					placeholder="Select skill"
					defaultValue={[]}
					isMulti
					as={FormSelect}
					control={control}
					name="skills"
					getOptionValue={(option: ISkills) => option.name}
					getOptionLabel={(option: ISkills) => option.name}
					options={skills}
				/>

				<FormLabel>Recruiters and specialists</FormLabel>
				<Controller
					placeholder="Select recruiters and specialists"
					defaultValue={[]}
					isMulti
					as={FormSelect}
					control={control}
					name="users"
					getOptionValue={({ firstName, lastName, role }: IUsers) =>
						`${firstName} ${lastName} (${role})`
					}
					getOptionLabel={({ firstName, lastName, role }: IUsers) =>
						`${firstName} ${lastName} (${role})`
					}
					options={users}
				/>
				<WrapperTextField>
					<TextField
						inputRef={register}
						name="startDate"
						margin="normal"
						id="datetime-local"
						label="Start of internship"
						type="datetime-local"
						defaultValue="2021-01-01T00:00"
						InputLabelProps={{
							shrink: true,
						}}
					/>

					<TextField
						inputRef={register}
						name="endDate"
						margin="normal"
						id="datetime-local"
						label="End of internship"
						type="datetime-local"
						defaultValue="2021-01-01T00:00"
						InputLabelProps={{
							shrink: true,
						}}
					/>

					<TextField
						inputRef={register}
						name="deadline"
						margin="normal"
						id="datetime-local"
						label="End of trainee recruitment"
						type="datetime-local"
						defaultValue="2021-01-01T00:00"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</WrapperTextField>

				<Editor
					value={editText}
					onEditorChange={setEditText}
					apiKey="2napic12bkocy7nyqobkph0zdknurnfuu6u9a8di7mc7mp3q"
					initialValue="<p><strong>Work at Exadel &ndash; Who We Are:</strong><br />Since 1998, Exadel has been engineering its own software products and custom software for clients of all sizes. Headquartered in Walnut Creek, California, Exadel currently has 1000+ employees in development centers across America, Europe, and Asia. Our people drive Exadel&rsquo;s success, and they are at the core of our values, so Exadel is a people-first cultured company.</p>"
					init={{
						width: 600,
						height: 300,
						menubar: false,
						plugins: [
							'advlist autolink lists link image charmap print preview anchor',
							'searchreplace visualblocks code fullscreen',
							'insertdatetime media table paste code help wordcount',
						],
						toolbar:
							'undo redo | formatselect | ' +
							'bold italic backcolor | alignleft aligncenter ' +
							'alignright alignjustify | bullist numlist outdent indent | ' +
							'removeformat | help',
						content_style:
							'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
					}}
				/>

				<FormButton type="submit">Create</FormButton>
			</Form>
		</WrapperForm>
	);
};
