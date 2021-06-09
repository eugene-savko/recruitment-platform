import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button } from '@material-ui/core';

export const CourseDetailsEditor: React.FC = () => {
	const initialValue =
		'<p><strong>Work at Exadel &ndash; Who We Are:</strong><br />Since 1998, Exadel has been engineering its own software products and custom software for clients of all sizes. Headquartered in Walnut Creek, California, Exadel currently has 1000+ employees in development centers across America, Europe, and Asia. Our people drive Exadel&rsquo;s success, and they are at the core of our values, so Exadel is a people-first cultured company.</p>';

	const { handleSubmit, control, setValue } = useForm();

	const onSubmint: SubmitHandler<any> = (data) => {
		console.log(data);
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(onSubmint)}>
				<Controller
					defaultValue={initialValue}
					name="courseEditorDetails"
					control={control}
					render={({ value, onChange }) => (
						<Editor
							initialValue={initialValue}
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
					)}
				/>

				<Button
					style={{ marginTop: '16px' }}
					type="submit"
					variant="outlined"
					color="primary"
				>
					Update course details
				</Button>
			</form>
		</React.Fragment>
	);
};
