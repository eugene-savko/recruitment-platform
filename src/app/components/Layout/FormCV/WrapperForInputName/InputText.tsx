import React from 'react';

// interface
import IInputNameData from './types/IInputNameData';

import { InputStyle } from './component/InputStyle';

interface INavMenuProps {
	inputNameData: IInputNameData;
}

export const InputText: React.FunctionComponent<INavMenuProps> = ({
	inputNameData,
}) => (
	<React.Fragment>
		<InputStyle
			name={inputNameData.name}
			placeholder={inputNameData.placeholder}
			title={inputNameData.title}
			label={inputNameData.label}
			type={inputNameData.type}
			inputProps={{ maxlength: '65' }}
			variant="outlined"
			required
		/>
	</React.Fragment>
);
