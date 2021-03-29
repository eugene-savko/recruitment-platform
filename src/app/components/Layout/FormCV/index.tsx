import React from 'react';

import { Legend } from './Legend/index';
import { WrapperForInputName } from './WrapperForInputName';
import { FormArea } from './component/FormArea';

const FormCV: React.FunctionComponent = () => (
	<>
		<FormArea>
			<Legend />
			<WrapperForInputName />
		</FormArea>
	</>
);

export default FormCV;
