import React from 'react';

import { WrapperInputs, Input, Select } from './components';

import { IListItemSelect } from '../types';

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: any;
	englishLevel: Array<IListItemSelect>;
	internship: Array<IListItemSelect>;
	primarySkill: Array<IListItemSelect>;
	city: Array<IListItemSelect>;
	country: Array<IListItemSelect>;
}

export const Body: React.FunctionComponent<IProps> = ({
	register,
	englishLevel,
	internship,
	primarySkill,
	country,
	city,
}) => {
	return (
		<WrapperInputs>
			<Input
				ref={register({ required: 'Field is required' })}
				type="text"
				name="firstName"
				placeholder="First Name *"
			/>
			<Input
				ref={register({ required: 'Field is required' })}
				type="text"
				name="lastName"
				placeholder="Last name *"
			/>
			<Input
				ref={register({ required: 'Field is required' })}
				type="email"
				name="email"
				placeholder="Email adress *"
			/>
			<Input
				ref={register({ required: 'Field is required' })}
				type="tel"
				name="phone"
				placeholder="Phone number"
			/>

			<Select
				name="englishLevel"
				ref={register({ required: true })}
				// placeholder="English level"
				// value="English level"
			>
				{englishLevel?.map((item) => (
					<option value={item.name} key={item.id}>
						{item.name}
					</option>
				))}
			</Select>

			<Select
				name="internship"
				ref={register({ required: true })}
				placeholder="English level"
			>
				{internship?.map((item) => (
					<option value={item.name} key={item.id}>
						{item.name}
					</option>
				))}
			</Select>

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
		</WrapperInputs>
	);
};
