import React from 'react';

import { Legend } from './Legend/index';
import { WrapperForInputName } from './WrapperForInputName';
import { FormArea } from './component/FormArea';
import { TextAreaField } from './TextAreaField/component/TextAreaStyle';
import { InfoField } from './InfoField/component/InfoFieldStyle';

const FormCV: React.FunctionComponent = () => (
	<React.Fragment>
		<FormArea>
			<Legend />
			<WrapperForInputName />
			<TextAreaField
				placeholder="Other information"
				title="Other information"
			/>
			<InfoField>* Fields marked with * are required.</InfoField>
		</FormArea>
	</React.Fragment>
);

export default FormCV;
