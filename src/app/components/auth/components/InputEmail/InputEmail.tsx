/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import { STextField } from '../../styled/style';
import { IPropsInput } from '../../types/AuthTypes';

export const InputEmail = forwardRef<HTMLInputElement, IPropsInput>(
	(props, ref) => (
		<STextField
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
