import React, { forwardRef } from 'react';

import { AuthInput } from './components';

const InputPassword = forwardRef<HTMLInputElement>((props, ref) => (
	<AuthInput
		type="password"
		name="password"
		label="Password"
		placeholder="Enter password"
		defaultValue=""
		margin="normal"
		inputRef={ref}
		fullWidth
		variant="outlined"
	/>
));

export default InputPassword;
