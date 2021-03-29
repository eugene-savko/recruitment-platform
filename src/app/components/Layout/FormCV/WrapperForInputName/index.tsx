import React from 'react';

import { InputFirstName } from './InputFirstName';
import { InputLastName } from './InputLastName';
import { InputEmail } from './InputEmail';
import { InputPhone } from './InputPhone';

import { WrapperForTowColomn } from './component/WrapperForTowColomn';
import { BlockForInputs } from './component/BlokForInputs';

export const WrapperForInputName: React.FunctionComponent = () => (
	<>
		<WrapperForTowColomn>
			<BlockForInputs>
				<InputFirstName />
				<InputEmail />
				<InputLastName />
			</BlockForInputs>
			<BlockForInputs>
				<InputLastName />
				<InputPhone />
				<InputLastName />
			</BlockForInputs>
		</WrapperForTowColomn>
	</>
);
