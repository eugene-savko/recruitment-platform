import React from 'react';

import { Legend } from './Legend/index';
import { WrapperForInputName } from './WrapperForInputName';
import { FormArea } from './component/FormArea';
import { TextAreaField } from './TextAreaField/index';

const FormCV: React.FunctionComponent = () => (
	<React.Fragment>
		<FormArea>
			<Legend />
			<WrapperForInputName />
			<TextAreaField />
		</FormArea>
	</React.Fragment>
);

export default FormCV;
