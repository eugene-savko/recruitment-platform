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
						rows={12}
						multiline
						placeholder="Leave you feedback..."
						variant="outlined"
					/>
					<ContainerBth>
						<ButtonMaterial variant="outlined" color="primary">
							Schedule
						</ButtonMaterial>
						<ButtonMaterial variant="outlined" color="primary">
							Send feedback
						</ButtonMaterial>
					</ContainerBth>
				</FeedbackForm>
			</Container>
		</React.Fragment>
	);
};

export default TechField;
