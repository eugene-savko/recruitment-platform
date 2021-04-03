import React from 'react';

import { Legend } from './Legend/index';
import { WrapperForInputName } from './WrapperForInputName';
import { FormArea } from './component/FormArea';
import { TextAreaField } from './TextAreaField/component/TextAreaStyle';
import { InfoField } from './InfoField/component/InfoFieldStyle';
import UploadButtons from './UploadFile/UploadFile';
import { CheckBoxing } from './CheckBox/CheckBox';
import {
	dataCheckBoxApplying,
	dataCheckBoxUnderstand,
} from './CheckBox/TextForCheckBox/TextForCheckBox';
import { ButtonSubmit } from './ButtonSubmit/index';

const FormCV: React.FunctionComponent = () => (
	<React.Fragment>
		<FormArea>
			<Legend />
			<WrapperForInputName />
			<TextAreaField
				placeholder="Other information"
				title="Other information"
			/>
			<InfoField>* Fields marked with * are required.</InfoField>
			<UploadButtons />

			<div
				style={{ margin: '0 70px 0', display: 'flex', flexDirection: 'column' }}
			>
				<CheckBoxing
					id={dataCheckBoxApplying.id}
					text={dataCheckBoxApplying.text}
				/>
				<CheckBoxing
					id={dataCheckBoxUnderstand.id}
					text={dataCheckBoxUnderstand.text}
				/>
			</div>
			<div
				style={{
					margin: '40px 70px 0',
					display: 'flex',
					justifyContent: 'flex-end',
				}}
			>
				<ButtonSubmit />
			</div>
		</FormArea>
	</React.Fragment>
);

export default FormCV;
