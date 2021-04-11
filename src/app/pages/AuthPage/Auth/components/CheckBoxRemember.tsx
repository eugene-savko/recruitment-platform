import React from 'react';

import { Controller } from 'react-hook-form';

import {
	FormControlLabel,
	Checkbox as MaterialCheckBox,
} from '@material-ui/core';

import { ICheckProps } from '../types';

// todo типизировать mouseevent
// todo typization props
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
