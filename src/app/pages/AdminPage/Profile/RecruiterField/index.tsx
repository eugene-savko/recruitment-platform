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
import { Select } from './components';

// type
import { IFormFields, IFeedbackInfo, IListItemSelect } from '../types';

interface IRecruiterFieldProps {
	englishLevel: Array<IListItemSelect>;
	feedbackContent: Array<IFeedbackInfo>;
}

const RecruiterField: React.FunctionComponent<IRecruiterFieldProps> = ({
	englishLevel,
	feedbackContent,
}) => {
	const { feedback } = feedbackContent[1];
	const [checkOut, setCheckOut] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [feedbackRecruiter, setFeedbackRecruiter] = useState(feedback);
	const { register, handleSubmit } = useForm<IFormFields>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFeedbackRecruiter(event.target.value);
		setCheckOut(true);
	};

	const onSubmit = (data: IFormFields) => {
		setCheckOut(false);
		setIsShown(true);
		setTimeout(() => setIsShown(false), 3000);
		const { levelEnglishRecruiter } = data;
		const sendDataRecruiter = {
			feedbackRecruiter,
			levelEnglishRecruiter,
		};
		// eslint-disable-next-line no-console
		console.log(sendDataRecruiter);
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
				<Title>Recruiter field</Title>
				<FeedbackForm onSubmit={handleSubmit(onSubmit)}>
					<FeedbackField
						label="Feedback"
						id="feedback-recruiter"
						name="feedbackRecruiter"
						rows={12}
						multiline
						value={feedbackRecruiter || ''}
						onChange={handleChange}
						placeholder="Leave you feedback..."
						variant="outlined"
					/>
					<ContainerBth>
						<ButtonMaterial variant="outlined" color="primary">
							Schedule
						</ButtonMaterial>
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
