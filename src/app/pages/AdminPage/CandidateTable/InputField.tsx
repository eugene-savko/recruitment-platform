import React, { forwardRef } from 'react';
import { Input, LabelFormFilter } from './components';

interface IInputField {
	name: string;
	type: string;
	id: string;
	placeholder: string;
}

export const InputField = forwardRef((props: IInputField, ref) => {
	return (
		<div>
			<LabelFormFilter>
				Full Name
				<Input inputRef={ref} {...props} placeholder="Full Name" />
			</LabelFormFilter>
		</div>
	);
});
