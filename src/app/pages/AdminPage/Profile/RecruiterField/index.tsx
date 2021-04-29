import React from 'react';
// import { useForm } from 'react-hook-form';

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

import IListItemSelect from '../types/IListItemSelect';

interface IRecruiterFieldProps {
	// register: ReturnType<typeof useForm>['register'];
	// errorMessage: ReturnType<typeof useForm>['errors'];
	englishLevel: Array<IListItemSelect>;
}

const RecruiterField: React.FunctionComponent<IRecruiterFieldProps> = ({
	englishLevel,
}) => {
	return (
		<React.Fragment>
			<Container>
				<Title>Recruiter field</Title>
				<FeedbackForm>
					<FeedbackField
						id="feedback-recruiter"
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
						<Select
							id="english-after-interview"
							name="English level"
							// ref={register({ required: true })}
						>
							{englishLevel?.map((item) => (
								<option value={item.name} key={item.id}>
									{item.name}
								</option>
							))}
						</Select>
						<ButtonMaterial variant="outlined" color="primary">
							Send feedback
						</ButtonMaterial>
					</ContainerBth>
				</FeedbackForm>
			</Container>
		</React.Fragment>
	);
};

export default RecruiterField;
