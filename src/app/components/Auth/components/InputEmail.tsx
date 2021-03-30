/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import { AuthInput } from './styled';

interface IPropsInputEmail {}

const InputEmail = forwardRef<HTMLInputElement, IPropsInputEmail>(
	(props, ref) => (
		<AuthInput
			type="email"
			name="email"
			label="Email"
			placeholder="Enter email"
			defaultValue=""
			margin="normal"
			inputRef={ref}
			fullWidth
			{...props}
		/>
	)
);

export default InputEmail;
