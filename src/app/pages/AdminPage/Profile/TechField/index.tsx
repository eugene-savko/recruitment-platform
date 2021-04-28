import React from 'react';

// style
import {
	Container,
	ContainerBth,
	FeedbackForm,
	Title,
	ButtonMaterial,
	FeedbackField,
} from '../components';

const TechField: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Container>
				<Title>Tech field</Title>
				<FeedbackForm>
					<FeedbackField
						id="feedback-tech"
						label="Feedback"
						multiline
						placeholder="Leave you feedback..."
						variant="outlined"
					/>
					<ContainerBth>
						<ButtonMaterial variant="contained">Schedule Tech</ButtonMaterial>
						<ButtonMaterial variant="contained">Send feedback</ButtonMaterial>
					</ContainerBth>
				</FeedbackForm>
			</Container>
		</React.Fragment>
	);
};

export default TechField;
