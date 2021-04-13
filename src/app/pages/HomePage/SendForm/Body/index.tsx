import React, { useState } from 'react';

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

import { IListItemSelect } from '../types';

interface IProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	errorMessage: any;
	englishLevel: Array<IListItemSelect>;
	primarySkill: Array<IListItemSelect>;
}

export const Body: React.FunctionComponent<IProps> = ({
	register,
	englishLevel,

	errorMessage,
}) => {
	const [country, setCountry] = useState('');
	const [region, setRegion] = useState('');

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
					onChange={(val) => {
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
					value={region}
					onChange={(val) => setRegion(val)}
				/>
				<HidenInput
					name="region"
					value={region}
					ref={register()}
					onChange={(val) => val}
				/>
			</InputItem>
		</WrapperInputs>
	);
};
