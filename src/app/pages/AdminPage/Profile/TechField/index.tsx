import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Prompt } from 'react-router-dom';
import { authContext } from 'app/contexts/AuthLoggedContext';

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
	feedbackContent: Array<IFeedbackInfo>;
	// role: string;
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

const checkRole = () => {
	const { auth } = useContext(authContext);
	return auth.dataRole?.role as string;
};

const TechField: React.FunctionComponent<ITechFieldProps> = ({
	feedbackContent,
	// role,
}) => {
	const [areaDisabled, setAreaDisabled] = useState(false);
	const [checkOut, setCheckOut] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [feedbackTech, setFeedbackTech] = useState<string | undefined>('');
	const { handleSubmit } = useForm<IFormFields>();
	const role = checkRole();

	useEffect(() => {
		if (feedbackContent === undefined) {
			setFeedbackTech(' ');
		} else {
			const { feedback } =
				feedbackContent[0].fromUser.role === 'SPECIALIST'
					? feedbackContent[0]
					: feedbackContent[1];
			setFeedbackTech(feedback);
		}
	}, []);

	// console.log('COM TechField. Role - ', role);

	// if (role === 'ADMIN') {
	// 	setAreaDisabled(true);
	// }

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFeedbackTech(event.target.value);
		setCheckOut(true);
	};

	const onSubmit = () => {
		const sendDataTech = {
			id:
				feedbackContent[0].fromUser.role === 'SPECIALIST'
					? feedbackContent[0].id
					: (feedbackContent[1].id as number),
			feedback: feedbackTech as string,
		};

		const putUpdateFeedback = async () => {
			try {
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
						disabled={areaDisabled}
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
							<ButtonMaterial
								variant="outlined"
								color="primary"
								title="Schedule Tech"
							>
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
