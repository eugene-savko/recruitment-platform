import React from 'react';

// components
import { InputText } from './InputText';
import { InputSelect } from './InputSelect';
import { SelectCounty } from './SelectCounty';

// styles
import { WrapperForTowColomn } from './component/WrapperForTowColomn';
import { BlockForInputs } from './component/BlokForInputs';

// interface
import { ISelectNameData, ISelectCountry, ISelectCity } from './types/types';

// data
import {
	InputFirstNameData,
	InputLastNameData,
	InputPhoneData,
	InputEmailData,
} from './data/dataForInput';

const IselectCourse: Array<ISelectNameData> = [
	{ title: 'Desired course', name: 'course 0' },
	{ name: 'course 1' },
	{ name: 'course 2' },
	{ name: 'course 3' },
];

const IselectLevelEnglish: Array<ISelectNameData> = [
	{ title: 'English level', name: 'A0 Starter' },
	{ name: 'A1 Elementary' },
	{ name: 'A2 Pre-intermediate' },
	{ name: 'B1 Intermediate' },
	{ name: 'B2 Upper-intermediate' },
	{ name: 'C1 Advanced' },
];

const IUserselectCountry: Array<ISelectCountry> = [
	{ data: 'Belarus', title: 'Country' },
	{ data: 'Georgia' },
	{ data: 'Lithuania' },
	{ data: 'Poland' },
	{ data: 'Russia' },
	{ data: 'Ukraine' },
	{ data: 'United States' },
	{ data: 'Uzbekistan' },
];

const IUserselectCity: Array<ISelectCity> = [
	{
		data: [
			{ city: 'Any city' },
			{ city: 'Brest' },
			{ city: 'Gomel' },
			{ city: 'Grodno' },
			{ city: 'Minsk' },
			{ city: 'Vitebsk' },
		],
	},
	{ data: [{ city: 'Any city' }, { city: 'Tbilisi' }] },
	{ data: [{ city: 'Any city' }, { city: 'Klaipeda' }, { city: 'Vilnius' }] },
	{
		data: [
			{ city: 'Any city' },
			{ city: 'Bialystok' },
			{ city: 'Poznan' },
			{ city: 'Szczecin' },
			{ city: 'Warsaw' },
		],
	},
	{
		data: [
			{ city: 'Any city' },
			{ city: 'Chelyabinsk' },
			{ city: 'Yekaterinburg' },
		],
	},
	{
		data: [
			{ city: 'Any city' },
			{ city: 'Kharkiv' },
			{ city: 'Kiev' },
			{ city: 'Lviv' },
			{ city: 'Odessa' },
			{ city: 'Vinnytsia' },
		],
	},
	{ data: [{ city: 'Any city' }, { city: 'Boulder' }] },
	{ data: [{ city: 'Any city' }, { city: 'Tashkent' }] },
];

export const WrapperForInputName: React.FunctionComponent = () => (
	<React.Fragment>
		<WrapperForTowColomn>
			<BlockForInputs>
				<InputText inputNameData={InputFirstNameData} />
				<InputText inputNameData={InputEmailData} />
				<InputSelect selectItemsData={IselectLevelEnglish} />
			</BlockForInputs>
			<BlockForInputs>
				<InputText inputNameData={InputLastNameData} />
				<InputText inputNameData={InputPhoneData} />
				<InputSelect selectItemsData={IselectCourse} />
			</BlockForInputs>
		</WrapperForTowColomn>
		<SelectCounty
			selectCountryData={IUserselectCountry}
			selectCityyData={IUserselectCity}
		/>
	</React.Fragment>
);
