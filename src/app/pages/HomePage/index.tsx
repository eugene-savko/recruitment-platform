import React from 'react';
import { SendForm } from './SendForm';
import { Trainings } from './Trainings';

export const HomePage: React.FunctionComponent = () => (
	<React.Fragment>
		<Trainings />
		<SendForm />
	</React.Fragment>
);
