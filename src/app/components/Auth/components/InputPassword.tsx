/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import { AuthInput } from './styled';

interface IPropsInputPassword {}

const InputPassword = forwardRef<HTMLInputElement, IPropsInputPassword>(
	(props, ref) => (
		<AuthInput
			type="password"
			name="password"
			label="Password"
			placeholder="Enter password"
			defaultValue=""
			margin="normal"
			inputRef={ref}
			fullWidth
			{...props}
		/>
	)
);

export default InputPassword;
