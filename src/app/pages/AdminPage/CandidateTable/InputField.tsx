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
			<FormLabel>{props.placeholder}</FormLabel>
			<FormInput
				{...props}
				inputRef={ref}
				placeholder="Full Name"
				disableUnderline
			/>
		</div>
	);
});
