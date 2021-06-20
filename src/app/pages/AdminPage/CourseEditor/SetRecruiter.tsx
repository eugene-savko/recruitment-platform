import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { fetchListRecruitersEditor } from 'app/API/CourseEditor';
import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { CourseEditorError } from './CourseEditorError';

export const SetRecruiter: React.FC = () => {
	const { control } = useFormContext();
	const [listRecruiterEditor, setListRecruiterEditor] = useState([]);
	const { errors } = useFormContext();

	useEffect(() => {
		(async () => {
			setListRecruiterEditor(await fetchListRecruitersEditor());
		})();
	}, []);

	return (
		<React.Fragment>
			<Controller
				name="listRecruiters"
				control={control}
				rules={{
					validate: {
						isEmptyListRecruiters: (value) => {
							return value.length > 0 || 'Choose a recruiter';
						},
					},
				}}
				render={(props) => {
					return (
						<Autocomplete
							{...props}
							multiple
							disableCloseOnSelect
							filterSelectedOptions
							limitTags={2}
							id="listRecruiters"
							options={listRecruiterEditor}
							onChange={(e, data) => {
								props.onChange(data);
							}}
							renderOption={(option) => <span>{option.recruiter}</span>}
							getOptionLabel={(option) => option.recruiter}
							getOptionSelected={(option, value) =>
								option.recruiter === value.recruiter
							}
							renderInput={(params) => (
								<TextField
									{...params}
									style={{ marginBottom: '0' }}
									label="Choose a recruiter"
									variant="outlined"
									margin="normal"
								/>
							)}
						/>
					);
				}}
			/>
			<CourseEditorError
				nameInputElement={errors.listRecruiters}
				messageError={errors.listRecruiters?.message}
			/>
		</React.Fragment>
	);
};
