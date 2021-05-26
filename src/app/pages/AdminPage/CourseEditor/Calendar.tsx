import React from 'react';
import TextField from '@material-ui/core/TextField';

export const InlineDatePicker: React.FunctionComponent = () => {
	return (
		<form noValidate>
			<TextField
				margin="normal"
				id="datetime-local"
				label="Next date of course"
				type="datetime-local"
				defaultValue="2017-05-24T10:30"
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</form>
	);
};
