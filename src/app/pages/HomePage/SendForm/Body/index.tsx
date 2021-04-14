import React, { useState } from 'react';

// style components
import {
	WrapperInputs,
	Input,
	Select,
	InputItem,
	TextError,
	HidenInput,
	SelectCountry,
	SelectCity,
} from './components';

// type
import { IBodyProps, ITextArea } from '../types';
import { TextArea } from './TextArea';

export const Body: React.FunctionComponent<IBodyProps> = ({
	register,
	englishLevel,
	primarySkill,
	errorMessage,
}) => {
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');

	return (
		<WrapperInputs>
			<InputItem>
				<Input
					ref={register({
						required: 'Field is required',
						minLength: {
							value: 3,
							message: 'No valide first name.',
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
							message: 'No valide second name.',
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
							message: 'No valide email adress.',
						},
					})}
					type="email"
					name="email"
					placeholder="Email adress *"
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
							message: 'No valide phone number.',
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
					name="primarySkill"
					ref={register({ required: true })}
					placeholder="English level"
				>
					{primarySkill?.map((item) => (
						<option value={item.name} key={item.id}>
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
					defaultOptionLabel="Select a country, man."
					onChange={(val: React.SetStateAction<string>) => {
						setCountry(val);
					}}
				/>
				<HidenInput
					name="country"
					value={country}
					ref={register()}
					onChange={(val) => val}
				/>
			</InputItem>

			<InputItem>
				<SelectCity
					country={country}
					blankOptionLabel="No country selected, man."
					defaultOptionLabel="Now select a region, pal."
					value={city}
					onChange={(val: React.SetStateAction<string>) => setCity(val)}
				/>
				<HidenInput
					name="city"
					value={city}
					ref={register()}
					onChange={(val) => val}
				/>
			</InputItem>
			<TextArea register={register} />
		</WrapperInputs>
	);
};
