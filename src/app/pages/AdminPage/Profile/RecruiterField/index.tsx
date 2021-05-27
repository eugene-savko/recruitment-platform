import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Prompt } from 'react-router-dom';

// API
import updateFeedback from 'app/API/updateFeedback';
import setStatusCandidate from 'app/API/setStatusCandidate';

// context
import { AdminPanelContext } from 'app/contexts/AdminPanelContext';

// pop-up
import { SwitcherRolesContext } from 'app/contexts/SwitcherRolesContext';
import PopUp from '../PopUp';

// style
import {
	Container,
	ContainerBth,
	FeedbackForm,
	Title,
	ButtonMaterial,
	FeedbackField,
	TextFieldEnglishLevel,
} from '../components';
import { Select } from './components';

// type
import { IFormFields, IFeedbackInfo, IListItemSelect } from '../types';
import { AdminRoutePath } from '../../routes';

interface IRecruiterFieldProps {
	englishLevelProps: Array<IListItemSelect>;
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
	englishLevelProps,
	feedbackContent,
}) => {
	const [checkOut, setCheckOut] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [levelEnglish, setLevelEnglish] = useState<string | undefined>('');
	const [feedbackRecruiter, setFeedbackRecruiter] = useState<
		string | undefined
	>('');
	const { register, handleSubmit } = useForm<IFormFields>();
	const { userId } = useContext(AdminPanelContext);
	const { setSwitchedRole } = useContext(SwitcherRolesContext);
	useEffect(() => {
		if (feedbackContent === undefined) {
			setFeedbackRecruiter('');
			setLevelEnglish('');
		} else {
			const { feedback } =
				feedbackContent[0].fromUser.role === 'RECRUITER'
					? feedbackContent[0]
					: feedbackContent[1];
			setFeedbackRecruiter(feedback);
			const { englishLevel } =
				feedbackContent[0].fromUser.role === 'RECRUITER'
					? feedbackContent[0]
					: feedbackContent[1];

			if (englishLevel === null) {
				setLevelEnglish(' ');
			} else {
				const levelIndex = 8 - Number(englishLevel);
				const levelName = englishLevelProps[levelIndex]
					? englishLevelProps[levelIndex].name
					: '';
				setLevelEnglish(levelName);
			}
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
			englishLevel: levelEnglishRecruiter as string,
		};

		setLevelEnglish(levelEnglishRecruiter);

		const putUpdateFeedback = async () => {
			try {
				await updateFeedback(sendDataRecruiter);
				setCheckOut(false);
				setIsShown(true);
				setTimeout(() => setIsShown(false), 3000);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.log(
					'COM RecruiterField.Error message - ',
					e.response.request.response
				);
			}
		};
		putUpdateFeedback();
	};

	const changeStatus = async () => {
		const status = {
			internshipRequestId: userId as number,
			internshipRequestStatus: 'RECRUITER_INTERVIEW_PASSED' as string,
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
						<Link
							to={AdminRoutePath.SCHEDULE_RECRUITER}
							style={{ textDecoration: 'none' }}
						>
							<ButtonMaterial
								variant="outlined"
								color="primary"
								title="Schedule Recruiter"
								onClick={() => setSwitchedRole?.('RECRUITER')}
							>
								Schedule
							</ButtonMaterial>
						</Link>
						<Select
							id="english-after-interview"
							name="levelEnglishRecruiter"
							ref={register}
						>
							{englishLevelProps?.map((item) => (
								<option value={item.name} key={item.id}>
									{item.name}
								</option>
							))}
						</Select>
						<TextFieldEnglishLevel
							label="English-level"
							variant="outlined"
							color="primary"
							value={levelEnglish}
							InputProps={{
								readOnly: true,
							}}
						/>
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
