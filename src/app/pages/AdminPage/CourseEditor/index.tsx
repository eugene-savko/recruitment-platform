import React, { useCallback, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Editor as TinyMCEEditor } from 'tinymce';
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
	const { register, handleSubmit, control } = useForm();
	const editorRef = useRef<TinyMCEEditor | null>(null);
	const [editData, setEditData] = useState({});
	const [editText, setEditText] = useState({ text: '' });
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current?.getContent());
			setEditText({ text: editorRef.current?.getContent() });
		}
	};
	const onSubmit = useCallback(
		(data) => {
			const newData = { ...data, editor: editText };
			log();
			setEditData(newData);
		},
		[editText]
	);
	const options1 = [
		{ value: 'chocolate' },
		{ value: 'strawberry' },
		{ value: 'vanilla' },
	];
	const options2 = [
		{ value: 'chocolate' },
		{ value: 'strawberry' },
		{ value: 'vanilla' },
	];
	return (
		<React.Fragment>
			<h2>Course editor</h2>
			<Form onSubmit={handleSubmit(onSubmit)} noValidate>
				<FormLabel>Internships</FormLabel>
				<Controller
					defaultValue
					isMulti
					as={FormSelect}
					control={control}
					name="Name"
					getOptionValue={(option: any) => option.value}
					getOptionLabel={(option: any) => option.value}
					options={options1}
				/>
				<FormLabel>Skills</FormLabel>
				<Controller
					defaultValue
					isMulti
					as={FormSelect}
					control={control}
					name="Next"
					getOptionValue={(option: any) => option.value}
					getOptionLabel={(option: any) => option.value}
					options={options2}
				/>
				<TextField
					inputRef={register}
					name="Data"
					margin="normal"
					id="datetime-local"
					label="Next date of course"
					type="datetime-local"
					defaultValue="2017-05-24T10:30"
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<div>
					<FormLabel>New Course</FormLabel>
					<FormInput placeholder="New Course" disableUnderline />
				</div>
				<Editor
					apiKey="2napic12bkocy7nyqobkph0zdknurnfuu6u9a8di7mc7mp3q"
					onInit={(evt, editor) => {
						editorRef.current = editor;
					}}
					initialValue="<p>This is the initial content of the editor. Hello.</p>"
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
