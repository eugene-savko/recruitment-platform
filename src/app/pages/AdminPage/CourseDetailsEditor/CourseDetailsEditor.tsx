import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller, useFormContext } from 'react-hook-form';

export const CourseDetailsEditor: React.FC = () => {
	const { control, setValue, getValues } = useFormContext();
	console.log(getValues());
	return (
		<React.Fragment>
			<div style={{ marginTop: '16px' }}>
				<Controller
					name="courseEditorDetails"
					control={control}
					render={({ value, onChange }) => {
						return (
							<Editor
								value={value}
								onEditorChange={(newValue) => {
									onChange(newValue);
									setValue('courseEditorDetails', newValue);
								}}
								apiKey="b9xmvvigbhy3mhakm0llnynworuh8e0vy1tdgu6d4ek0nmge"
								init={{
									height: '84vh',
									menubar: false,
									plugins: [
										'advlist autolink lists link image',
										'charmap print preview anchor help',
										'searchreplace visualblocks code',
										'insertdatetime media table paste wordcount',
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
						);
					}}
				/>
			</div>
		</React.Fragment>
	);
};
