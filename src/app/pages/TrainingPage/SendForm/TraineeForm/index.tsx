import React from 'react';

// style components
import {
	FieldsWrapper,
	InputItemWrapper,
	Input,
	Select,
	InputItem,
	TextError,
	HiddenInput,
	SelectCountry,
	SelectCity,
} from './components';

// type
import { ITraineeForm } from '../types';
import { TextArea } from './TextArea';

export const TraineeForm: React.FunctionComponent<ITraineeForm> = ({
	register,
	englishLevel,
	primarySkill,
	errorMessage,
	setCountry,
	setCity,
	country,
	city,
}) => {
	return (
		<FieldsWrapper>
			<InputItemWrapper>
				<InputItem>
					<Input
						ref={register({
							required: 'Field is required',
							minLength: {
								value: 3,
								message: 'Invalid first name.',
							},
						})}
						type="text"
						name="firstName"
						placeholder="First Name *"
					/>
					{errorMessage.firstName && (
						<TextError>{errorMessage.firstName.message}</TextError>
					)}
				</InputItem>

				<InputItem>
					<Input
						ref={register({
							required: 'Field is required',
							minLength: {
								value: 3,
								message: 'Invalid second name.',
							},
						})}
						type="text"
						name="lastName"
						placeholder="Last name *"
					/>
					{errorMessage.lastName && (
						<TextError>{errorMessage.lastName.message}</TextError>
					)}
				</InputItem>

				<InputItem>
					<Input
						ref={register({
							required: 'Field is required',
							minLength: {
								value: 3,
								message: 'Invalid email.',
							},
						})}
						type="email"
						name="email"
						placeholder="Email address *"
					/>
					{errorMessage.email && (
						<TextError>{errorMessage.email.message}</TextError>
					)}
				</InputItem>

				<InputItem>
					<Input
						ref={register({
							minLength: {
								value: 5,
								message: 'invalid phone number.',
							},
							pattern: {
								value: /[ +][0-9]{5}[ -][0-9]{3}[ -][0-9]{2}[ -][0-9]{2}/,
								message: 'Invalid phone number: +00000-000-00-00',
							},
						})}
						type="tel"
						name="phone"
						placeholder="Phone number"
					/>
					{errorMessage.phone && (
						<TextError>{errorMessage.phone.message}</TextError>
					)}
				</InputItem>

				<InputItem>
					<Select
						name="pSkill"
						ref={register({ required: true })}
						placeholder="English level"
					>
						{primarySkill?.map((item) => (
							<option value={item.id} key={item.id}>
								{item.name}
							</option>
						))}
					</Select>
				</InputItem>

				<InputItem>
					<Select name="englishLevel" ref={register}>
						{englishLevel?.map((item) => (
							<option value={item.name} key={item.id}>
								{item.name}
							</option>
						))}
					</Select>
				</InputItem>

				<InputItem>
					<SelectCountry
						value={country}
						defaultOptionLabel="Select a country"
						onChange={(val: React.SetStateAction<string>) => {
							setCountry(val);
						}}
					/>
					<HiddenInput
						name="country"
						value={country}
						ref={register()}
						onChange={(val) => val}
					/>
				</InputItem>

				<InputItem>
					<SelectCity
						country={country}
						blankOptionLabel="Any city "
						defaultOptionLabel="Now select a region"
						value={city}
						onChange={(val: React.SetStateAction<string>) => setCity(val)}
					/>
					<HiddenInput
						name="city"
						value={city}
						ref={register()}
						onChange={(val) => val}
					/>
				</InputItem>
			</InputItemWrapper>

			<TextArea register={register} />
		</FieldsWrapper>
	);
};
