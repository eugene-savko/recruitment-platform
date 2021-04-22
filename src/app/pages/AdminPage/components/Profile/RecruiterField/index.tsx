import React from 'react';
import { Container, ContainerBth, FeedbackField, Header } from './components';

export const RecruiterField: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Container>
				<Header>Recruiter field</Header>
				<FeedbackField />
				<ContainerBth />
			</Container>
		</React.Fragment>
	);
};

export default RecruiterField;
