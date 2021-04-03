import { Training } from 'app/pages/HomePage/Trainings';

import React from 'react';
import FormCV from './FormCV';

export const HomePage: React.FunctionComponent = () => (
	<React.Fragment>
		<Training />
		<FormCV />
	</React.Fragment>
);
