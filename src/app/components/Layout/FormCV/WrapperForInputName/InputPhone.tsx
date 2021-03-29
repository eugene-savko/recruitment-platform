import React from 'react';

import { InputText } from './component/InputStyle';

export const InputPhone: React.FunctionComponent = () => (
	<>
		<InputText
			placeholder="Phone"
			type="text"
			title="Enter Phone"
			name="Phone"
			label="Phone"
			variant="outlined"
			inputProps={{ type: 'tel' }}
		/>
	</>
);
