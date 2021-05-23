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
import { Select } from './components';

// type
import { IFormFields, IFeedbackInfo, IListItemSelect } from '../types';

interface IRecruiterFieldProps {
	englishLevel: Array<IListItemSelect>;
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

const RecruiterField: React.FunctionComponent<IRecruiterFieldProps> = ({
	englishLevel,
	feedbackContent,
	role,
}) => {
	const [checkOut, setCheckOut] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [feedbackRecruiter, setFeedbackRecruiter] = useState<
		string | undefined
	>('');
	const { register, handleSubmit } = useForm<IFormFields>();
	console.log('COM RecruiterField. Role - ', role);

	useEffect(() => {
		if (feedbackContent === undefined) {
			setFeedbackRecruiter('');
		} else {
			const { feedback } = feedbackContent;
			console.log('COM RecruiterField. Recruiter feedback - ', feedback);
			setFeedbackRecruiter(feedback);
		}
	}, [feedbackContent]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFeedbackRecruiter(event.target.value);
		setCheckOut(true);
	};

	const onSubmit = (data: IFormFields) => {
		const { levelEnglishRecruiter } = data;
		console.log(levelEnglishRecruiter);
		const sendDataRecruiter = {
			id: feedbackContent.id as number,
			feedback: feedbackRecruiter as string,
			// englishLevel: levelEnglishRecruiter as string,
		};

		const putUpdateFeedback = async () => {
			try {
				console.log(
					'COM RecruiterField. sendDataRecruiter -',
					sendDataRecruiter
				);
				await updateFeedback(sendDataRecruiter);
				setCheckOut(false);
				setIsShown(true);
				setTimeout(() => setIsShown(false), 3000);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log('COM RecruiterField.Error message - ', e.message);
			}
		};
		putUpdateFeedback();
	};

	return (
		<React.Fragment>
			<Prompt when={checkOut} message={handleMessage} />
			<Container>
				<Title>Recruiter field</Title>
				<FeedbackForm onSubmit={handleSubmit(onSubmit)}>
					<FeedbackField
						label="Feedback"
						id="feedback-recruiter"
						name="feedbackRecruiter"
						rows={12}
						multiline
						value={feedbackRecruiter}
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
						<Select
							id="english-after-interview"
							name="levelEnglishRecruiter"
							ref={register}
						>
							{englishLevel?.map((item) => (
								<option value={item.name} key={item.id}>
									{item.name}
								</option>
							))}
						</Select>
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

export default RecruiterField;
