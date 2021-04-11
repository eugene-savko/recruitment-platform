import React, { forwardRef } from 'react';

import { AuthInput } from './styled';

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
	/>
));

export default InputPassword;
