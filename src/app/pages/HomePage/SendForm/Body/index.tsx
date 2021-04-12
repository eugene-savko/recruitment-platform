import React from 'react';
import { Input } from '../components';
import { WrapperInputs } from './components';
import { SelectionBox } from './SelectionBox';

export const Body: React.FunctionComponent = () => {
	return (
		<WrapperInputs>
			<Input type="text" name="firstName" placeholder="First Name" />
			<Input type="text" name="secondName" />
			<Input type="email" name="email" />
			<Input type="tel" name="phone" />

			<SelectionBox />
			<SelectionBox />
			<SelectionBox />
			<SelectionBox />
			<SelectionBox />
		</WrapperInputs>
	);
};
