import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Prompt } from 'react-router-dom';

// API
import updateFeedback from 'app/API/updateFeedback';
import setStatusCandidate from 'app/API/setStatusCandidate';

// context
import { AdminPanelContext } from 'app/context/AdminPanelContext';

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
	feedbackContent: Array<IFeedbackInfo>;
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
}) => {
	const [checkOut, setCheckOut] = useState(false);
	const [isShown, setIsShown] = useState(false);

	const [feedbackRecruiter, setFeedbackRecruiter] = useState<
		string | undefined
	>('');
	const { register, handleSubmit } = useForm<IFormFields>();
	const { userId } = useContext(AdminPanelContext);

	useEffect(() => {
		if (feedbackContent === undefined) {
			setFeedbackRecruiter('');
		} else {
			const { feedback } =
				feedbackContent[0].fromUser.role === 'RECRUITER'
					? feedbackContent[0]
					: feedbackContent[1];
			setFeedbackRecruiter(feedback);
		}
	}, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFeedbackRecruiter(event.target.value);
		setCheckOut(true);
	};

	const onSubmit = (data: IFormFields) => {
		const { levelEnglishRecruiter } = data;
		const sendDataRecruiter = {
			id:
				feedbackContent[0].fromUser.role === 'RECRUITER'
					? feedbackContent[0].id
					: (feedbackContent[1].id as number),
			feedback: feedbackRecruiter as string,
			// englishLevel: levelEnglishRecruiter as string,
		};

		const putUpdateFeedback = async () => {
			try {
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

	const changeStatus = async () => {
		const status = {
			id: userId as number,
			status: 'RECRUITER_INTERVIEW_PASSED' as string,
		};
		try {
			await setStatusCandidate(status);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log('COM RecruiterField.Error message - ', e.message);
		}
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
							<ButtonMaterial
								variant="outlined"
								color="primary"
								title="Schedule Recruiter"
							>
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

						<ButtonMaterial
							variant="outlined"
							color="primary"
							onClick={changeStatus}
						>
							interview passed
						</ButtonMaterial>
					</ContainerBth>
				</FeedbackForm>
				<PopUp isShow={isShown} />
			</Container>
		</React.Fragment>
	);
};

export default RecruiterField;
