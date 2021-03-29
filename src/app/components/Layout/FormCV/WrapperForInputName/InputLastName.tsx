import React from 'react';

import { InputText } from './component/InputStyle';

export const InputLastName: React.FunctionComponent = () => (
	<>
		<InputText
			placeholder="Last name"
			type="text"
			title="Enter last name"
			name="Last name"
			label="Last name"
			variant="outlined"
			inputProps={{ maxLength: '65' }}
			required
		/>
	</>
);
