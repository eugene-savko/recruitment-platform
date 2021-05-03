import React, { forwardRef } from 'react';
import { FormInput, FormLabel } from './components';

interface IInputField {
	name: string;
	type: string;
	id: string;
	placeholder: string;
}

export const InputField = forwardRef((props: IInputField, ref) => {
	return (
		<div>
			<FormLabel>Full Name</FormLabel>
			<FormInput
				inputRef={ref}
				{...props}
				placeholder="Full Name"
				disableUnderline
			/>
		</div>
	);
});
