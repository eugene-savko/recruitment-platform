import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// pop-up
import PopUp from '../PopUp';

// style
import {
	Container,
	ContainerBth,
	FeedbackForm,
	Title,
	ButtonMaterial,
	FeedbackField,
} from '../components';

// type
import IFormFields from '../types/IFormFields';

// data from server
const feedbackFromServer = 'Good specialist ';

const TechField: React.FunctionComponent = () => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const [feedbackTech, setFeedbackTech] = useState<string>(feedbackFromServer);
	const { handleSubmit } = useForm<IFormFields>();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setFeedbackTech(event.target.value);
	const handlerClick = () => {
		// go to schedule tech
	};

	const onSubmit = () => {
		setIsShown(true);
		setTimeout(() => setIsShown(false), 3000);
		const sendDataTech = {
			feedbackTech,
		};
		// eslint-disable-next-line no-console
		console.log(sendDataTech);
	};

	return (
		<React.Fragment>
			<Container>
				<Title>Tech field</Title>
				<FeedbackForm onSubmit={handleSubmit(onSubmit)}>
					<FeedbackField
						label="Feedback"
						id="feedback-tech"
						name="feedbackTech"
						rows={12}
						multiline
						value={feedbackTech}
						onChange={handleChange}
						placeholder="Leave you feedback..."
						variant="outlined"
					/>
					<ContainerBth>
						<ButtonMaterial
							variant="outlined"
							color="primary"
							onClick={handlerClick}
						>
							Schedule
						</ButtonMaterial>
						<ButtonMaterial variant="outlined" color="primary" type="submit">
							Send feedback
						</ButtonMaterial>
					</ContainerBth>
				</FeedbackForm>
				<PopUp isShow={isShown} />
			</Container>
		</React.Fragment>
	);
};

export default TechField;
