import React from 'react';

import { Control, Controller } from 'react-hook-form';

import {
	FormControlLabel,
	Checkbox as MaterialCheckBox,
} from '@material-ui/core';

import { IFormInput } from '../types';

export interface ICheckProps {
	control: Control<IFormInput>;
}

const CheckBoxRemember: React.FunctionComponent<ICheckProps> = ({
	control,
}: ICheckProps) => (
	<FormControlLabel
		control={
			<Controller
				name="checkbox"
				control={control}
				render={(props) => (
					<MaterialCheckBox
						defaultValue=""
						color="primary"
						onChange={(e) => props.onChange(e.target.checked)}
						checked={props.value}
					/>
				)}
			/>
		}
		label="Запомнить"
	/>
);

export default CheckBoxRemember;
