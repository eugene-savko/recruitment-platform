import React from 'react';

import { Legend } from './Legend/index';
import { WrapperForInputName } from './WrapperForInputName';
import { FormArea } from './component/FormArea';
import { TextAreaField } from './TextAreaField/index';

const FormCV: React.FunctionComponent = () => (
	<>
		<FormArea>
			<Legend />
			<WrapperForInputName />
			<TextAreaField />
		</FormArea>
	</>
);

export default FormCV;
