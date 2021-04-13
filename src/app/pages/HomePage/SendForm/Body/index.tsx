import React from 'react';

import {
	WrapperInputs,
	Input,
	Select,
	InputItem,
	TextError,
} from './components';

import { IListItemSelect } from '../types';

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errorMessage: any;
	englishLevel: Array<IListItemSelect>;
	primarySkill: Array<IListItemSelect>;
	city: Array<IListItemSelect>;
	country: Array<IListItemSelect>;
}

export const Body: React.FunctionComponent<IProps> = ({
	register,
	englishLevel,
	primarySkill,
	country,
	city,
	errorMessage,
}) => {
	return (
		<WrapperInputs>
			<InputItem>
				<Input
					ref={register({
						required: 'The field is required.',
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
				<Select name="englishLevel" ref={register({ required: true })}>
					{englishLevel?.map((item) => (
						<option value={item.name} key={item.id}>
							{item.name}
						</option>
					))}
				</Select>
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
				<Select
					name="country"
					ref={register({ required: true })}
					placeholder="English level"
				>
					{country?.map((item) => (
						<option value={item.name} key={item.id}>
							{item.name}
						</option>
					))}
				</Select>
			</InputItem>

			<InputItem>
				<Select
					name="city"
					ref={register({ required: true })}
					placeholder="English level"
				>
					{city?.map((item) => (
						<option value={item.name} key={item.id}>
							{item.name}
						</option>
					))}
				</Select>
			</InputItem>
		</WrapperInputs>
	);
};
