import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Prompt } from 'react-router-dom';

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
import { IFormFields, IFeedbackInfo } from '../types';

interface ITechFieldProps {
	feedbackContent: IFeedbackInfo;
}

const TechField: React.FunctionComponent<ITechFieldProps> = ({
	feedbackContent,
}) => {
	const { feedback } = feedbackContent;
	const [checkOut, setCheckOut] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [feedbackTech, setFeedbackTech] = useState(feedback);
	const { handleSubmit } = useForm<IFormFields>();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFeedbackTech(event.target.value);
		setCheckOut(true);
	};

	const onSubmit = () => {
		setCheckOut(false);
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
			<Prompt
				when={checkOut}
				message={(location, action) => {
					if (action === 'POP') {
						// eslint-disable-next-line no-console
						console.log('Backing up...');
					}

					return location.pathname.startsWith('/app')
						? true
						: `Please save your review or it will be lost. \nAre you sure you want to go to ${location.pathname}?`;
				}}
			/>
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
						<ButtonMaterial variant="outlined" color="primary">
							Schedule
						</ButtonMaterial>
						<ButtonMaterial variant="outlined" color="primary" type="submit">
							Save feedback
						</ButtonMaterial>
					</ContainerBth>
				</FeedbackForm>
				<PopUp isShow={isShown} />
			</Container>
		</React.Fragment>
	);
};

export default TechField;
