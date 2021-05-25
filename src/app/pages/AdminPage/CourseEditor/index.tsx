import React, { useCallback, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import {
	Form,
	FormButton,
	FormInput,
	FormLabel,
	FormSelect,
} from './сomponents';

export const CourseEditor: React.FunctionComponent = () => {
	const { register, handleSubmit, control, reset } = useForm();
	const [editText, setEditText] = useState('');
	const onSubmit = useCallback(
		(data) => {
			const newData = { ...data, editor: editText };
			console.log(newData);
			reset();
		},
		[editText]
	);

	const country = [
		'Belarus',
		'Poland',
		'United States',
		'Russia',
		'Georgia',
		'Ukraine',
		'Lithuania',
		'Uzbekistan',
	];

	const city = [
		'Brest',
		'Gomel',
		'Grodno',
		'Minsk',
		'Vitebsk',
		'Tbilisi',
		'Bialystok',
		'Poznan',
		'Szczecin',
		'Warsaw',
		'Kharkiv',
		'Kiev',
		'Lviv',
		'Odessa',
		'Vinnytsia',
		'Boulder',
		'Klaipeda',
		'Vilnius',
		'Chelyabinsk',
		'Yekaterinburg',
		'Tashkent',
	];

	const recruiter = [
		'Oliver Hansen',
		'Van Henry',
		'April Tucker',
		'Ralph Hubbard',
		'Omar Alexander',
		'Carlos Abbott',
		'Miriam Wagner',
		'Bradley Wilkerson',
		'Virginia Andrews',
		'Kelly Snyder',
	];

	return (
		<React.Fragment>
			<h2>Course editor</h2>
			<Form onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormLabel>Country</FormLabel>
				<Controller
					placeholder="Select country"
					defaultValue
					isMulti
					as={FormSelect}
					control={control}
					name="country"
					getOptionValue={(option: any) => option}
					getOptionLabel={(option: any) => option}
					options={country}
				/>
				<FormLabel>City</FormLabel>
				<Controller
					placeholder="Select city"
					defaultValue
					isMulti
					as={FormSelect}
					control={control}
					name="city"
					getOptionValue={(option: any) => option}
					getOptionLabel={(option: any) => option}
					options={city}
				/>

				<FormLabel>Recruiter</FormLabel>
				<Controller
					placeholder="Select recruiter"
					defaultValue
					isMulti
					as={FormSelect}
					control={control}
					name="recruiter"
					getOptionValue={(option: any) => option}
					getOptionLabel={(option: any) => option}
					options={recruiter}
				/>

				<TextField
					inputRef={register}
					name="startDate"
					margin="normal"
					id="datetime-local"
					label="Start of internship"
					type="datetime-local"
					defaultValue="сюда прелетят данные для редактирования даты курса"
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
					defaultValue="сюда прелетят данные для редактирования даты курса"
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
					defaultValue="сюда прелетят данные для редактирования даты курса"
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<div>
					<FormLabel>New Course</FormLabel>
					<FormInput placeholder="New Course" disableUnderline />
				</div>
				<Editor
					value={editText}
					onEditorChange={setEditText}
					apiKey="2napic12bkocy7nyqobkph0zdknurnfuu6u9a8di7mc7mp3q"
					initialValue='<p><span style="background-color: #2dc26b;">сюда прелетят данные для редактирования даты курса</span></p>'
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
			<div />
		</React.Fragment>
	);
};
