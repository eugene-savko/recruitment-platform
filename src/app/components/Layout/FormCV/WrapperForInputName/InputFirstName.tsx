import React from 'react';

import { InputText } from './component/InputStyle';

export const InputFirstName: React.FunctionComponent = () => (
	<>
		<InputText
			placeholder="First name"
			type="text"
			title="Enter first name"
			name="First name"
			label="First name"
			variant="outlined"
			inputProps={{ maxlength: '65' }}
			required
		/>
	</>
);
