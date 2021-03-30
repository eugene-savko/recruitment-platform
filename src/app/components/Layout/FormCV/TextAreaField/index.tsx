import React from 'react';

import { TextareaAutosize } from './component/TextAreaStyle';

export const TextAreaField: React.FunctionComponent = () => (
	<React.Fragment>
		<TextareaAutosize
			aria-label="Other information"
			rowsMin={6}
			rowsMax={6}
			placeholder="Other information"
			title="Other information"
		/>
	</React.Fragment>
);
