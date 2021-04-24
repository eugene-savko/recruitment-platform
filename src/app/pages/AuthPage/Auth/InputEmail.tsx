import React, { forwardRef } from 'react';

import { AuthInput } from './components';

const InputEmail = forwardRef<HTMLInputElement>((props, ref) => (
	<AuthInput
		type="email"
		name="username"
		label="Email"
		placeholder="Enter email"
		defaultValue=""
		margin="normal"
		inputRef={ref}
		fullWidth
	/>
));

export default InputEmail;
