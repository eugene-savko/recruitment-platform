/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { STextField } from '../../styled/style';
import { IPropsInput } from '../../types/AuthTypes';

export const InputPassword = forwardRef<HTMLInputElement, IPropsInput>(
	(props, ref) => (
		<STextField
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
