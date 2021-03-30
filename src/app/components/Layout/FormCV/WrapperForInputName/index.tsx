import React from 'react';

import { InputText } from './InputText';
import { InputSelect } from './InputSelect';
import { WrapperForTowColomn } from './component/WrapperForTowColomn';
import { BlockForInputs } from './component/BlokForInputs';

// interface
import IInputNameData from './types/IInputNameData';
import ISelectNameData from './types/ISelectNameData';

const InputFirstNameData: IInputNameData = {
	name: 'First name',
	placeholder: 'First name',
	title: 'first name',
	label: 'First name',
	type: 'text',
};

const InputLastNameData: IInputNameData = {
	name: 'Last name',
	placeholder: 'Last name',
	title: 'last name',
	label: 'Last name',
	type: 'text',
};

const InputPhoneData: IInputNameData = {
	name: 'Phone',
	placeholder: 'Phone',
	title: 'enter phone',
	label: 'Phone',
	type: 'tel',
};

const InputEmailData: IInputNameData = {
	name: 'Email',
	placeholder: 'Email',
	title: 'enter email',
	label: 'Email',
	type: 'email',
};

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
	</React.Fragment>
);
