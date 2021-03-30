import React from 'react';

import { InputText } from './InputText';
import SelectLEvelEnglish from './SelectLEvelEnglish';
import SelectCourse from './SelectCourse';

import { WrapperForTowColomn } from './component/WrapperForTowColomn';
import { BlockForInputs } from './component/BlokForInputs';

// Interfase
import IInputNameData from './types/IInputNameData';

const InputFirstNameData: IInputNameData = {
	name: 'First name',
	placeholder: 'First name',
	title: 'first name',
	label: 'First name',
	type: 'text',
	maxLength: 65,
};

const InputLastNameData: IInputNameData = {
	name: 'Last name',
	placeholder: 'Last name',
	title: 'last name',
	label: 'Last name',
	type: 'text',
	maxLength: 65,
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

export const WrapperForInputName: React.FunctionComponent = () => (
	<>
		<WrapperForTowColomn>
			<BlockForInputs>
				<InputText inputNameData={InputFirstNameData} />
				<InputText inputNameData={InputEmailData} />
				<SelectLEvelEnglish />
			</BlockForInputs>
			<BlockForInputs>
				<InputText inputNameData={InputLastNameData} />
				<InputText inputNameData={InputPhoneData} />
				<SelectCourse />
			</BlockForInputs>
		</WrapperForTowColomn>
	</>
);
