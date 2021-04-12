import React from 'react';

import { Input } from '../components';
import { WrapperInputs } from './components';
import { SelectionBox } from './SelectionBox';

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: any;
}

export const Body: React.FunctionComponent<IProps> = ({ register }) => {
	return (
		<WrapperInputs>
			<Input
				ref={register({ required: 'Field is required' })}
				type="text"
				name="firstName"
				placeholder="First Name *"
			/>
			<Input
				ref={register({ required: 'Field is required' })}
				type="text"
				name="lastName"
				placeholder="Last name *"
			/>
			<Input
				ref={register({ required: 'Field is required' })}
				type="email"
				name="email"
				placeholder="Email adress *"
			/>
			<Input
				ref={register({ required: 'Field is required' })}
				type="tel"
				name="phone"
				placeholder="Phone number"
			/>

			<SelectionBox />
			<SelectionBox />
			<SelectionBox />
			<SelectionBox />
			<SelectionBox />
		</WrapperInputs>
	);
};
