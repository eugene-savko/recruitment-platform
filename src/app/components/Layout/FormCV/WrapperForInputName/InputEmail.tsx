import React from 'react';

import { InputText } from './component/InputStyle';

export const InputEmail: React.FunctionComponent = () => (
	<>
		<InputText
			placeholder="Last name"
			type="text"
			title="Enter email addres"
			name="Email"
			label="Email"
			variant="outlined"
			inputProps={{ type: 'email' }}
			required
		/>
	</>
);
