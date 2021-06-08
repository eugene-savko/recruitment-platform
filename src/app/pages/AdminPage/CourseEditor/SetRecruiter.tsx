import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { fetchListRecruitersEditor } from 'app/API/CourseEditor';
import React, { useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

export const SetRecruiter: React.FC = () => {
	const { control } = useFormContext();
	const [listRecruiterEditor, setListRecruiterEditor] = useState([]);

	useEffect(() => {
		(async () => {
			setListRecruiterEditor(await fetchListRecruitersEditor());
		})();
	}, []);

	return (
		<Controller
			name="listRecruiters"
			control={control}
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
								label="Choose a recruiter"
								variant="outlined"
								margin="normal"
							/>
						)}
					/>
				);
			}}
		/>
	);
};
