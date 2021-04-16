import React from 'react';
import { SendForm } from './SendForm';
import { Training } from './Trainings';

export const HomePage: React.FunctionComponent = () => (
	<React.Fragment>
		<Training />
		<SendForm />
	</React.Fragment>
);
