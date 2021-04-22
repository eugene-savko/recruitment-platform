import React from 'react';
import {
	Container,
	ContainerBth,
	FeedbackField,
	Header,
} from '../RecruiterField/components';

export const TechField: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Container>
				<Header>Tech field</Header>
				<FeedbackField />
				<ContainerBth />
			</Container>
		</React.Fragment>
	);
};
