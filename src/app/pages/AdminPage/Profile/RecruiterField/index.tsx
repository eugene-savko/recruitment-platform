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
import { Select } from './components';

// type
import { IFormFields, IFeedbackInfo, IListItemSelect } from '../types';

interface IRecruiterFieldProps {
	englishLevel: Array<IListItemSelect>;
	feedbackContent: IFeedbackInfo;
}

const RecruiterField: React.FunctionComponent<IRecruiterFieldProps> = ({
	englishLevel,
	feedbackContent,
}) => {
	const { feedback } = feedbackContent;
	const [isShown, setIsShown] = useState(false);
	const [feedbackRecruiter, setFeedbackRecruiter] = useState(feedback);
	const { register, handleSubmit } = useForm<IFormFields>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setFeedbackRecruiter(event.target.value);

	const onSubmit = (data: IFormFields) => {
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
