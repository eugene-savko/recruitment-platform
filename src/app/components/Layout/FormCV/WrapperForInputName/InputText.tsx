import React from 'react';

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
			variant="outlined"
			inputProps={{ maxLength: '65' }}
			required
		/>
	</React.Fragment>
);
