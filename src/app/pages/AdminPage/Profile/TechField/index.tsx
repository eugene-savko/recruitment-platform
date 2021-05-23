import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Prompt } from 'react-router-dom';

// API
import updateFeedback from 'app/API/updateFeedback';

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
	role: string;
}

const handleMessage = (location: { pathname: string }, action: string) => {
	if (action === 'POP') {
		// eslint-disable-next-line no-console
		console.log('Backing up...');
	}
	return location.pathname.startsWith('/app')
		? true
		: `Please save your review or it will be lost. \nAre you sure you want to go to ${location.pathname}?`;
};

const TechField: React.FunctionComponent<ITechFieldProps> = ({
	feedbackContent,
	role,
}) => {
	// const [areaDisabled, setAreaDisabled] = useState(false);
	const [checkOut, setCheckOut] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [feedbackTech, setFeedbackTech] = useState<string | undefined>('');
	const { handleSubmit } = useForm<IFormFields>();
	console.log('COM TechField. Role - ', role);

	useEffect(() => {
		if (feedbackContent === undefined) {
			setFeedbackTech(' ');
		} else {
			const { feedback } = feedbackContent;
			console.log('COM TechField. Tech feedback - ', feedback);
			setFeedbackTech(feedback);
		}
	}, [feedbackContent]);

	// if (role === 'RECRUITER') {
	// setAreaDisabled(true);
	// } else if (role === 'ADMIN' || role === 'RECRUITER') {
	// 	setAreaDisabled(true);
	// } else {
	// setAreaDisabled(false);
	// }

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFeedbackTech(event.target.value);
		setCheckOut(true);
	};

	const onSubmit = () => {
		const sendDataTech = {
			id: feedbackContent.id as number,
			feedback: feedbackTech as string,
		};

		const putUpdateFeedback = async () => {
			try {
				console.log('COM TechField. sendDataTech - ', sendDataTech);
				await updateFeedback(sendDataTech);
				setCheckOut(false);
				setIsShown(true);
				setTimeout(() => setIsShown(false), 3000);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log('Error message - ', e.message);
			}
		};
		putUpdateFeedback();
	};

	return (
		<React.Fragment>
			<Prompt when={checkOut} message={handleMessage} />
			<Container>
				<Title>Tech field</Title>
				<FeedbackForm onSubmit={handleSubmit(onSubmit)}>
					<FeedbackField
						// disabled={areaDisabled}
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
						<Link to="/schedule-recruiter" style={{ textDecoration: 'none' }}>
							<ButtonMaterial variant="outlined" color="primary">
								Schedule
							</ButtonMaterial>
						</Link>
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
