import React from 'react';

import { Controller } from 'react-hook-form';

import {
	FormControlLabel,
	Checkbox as MaterialCheckBox,
} from '@material-ui/core';

import { ICheckProps } from './types';

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
						color="primary"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							props.onChange(e.target.checked)
						}
						checked={props.value}
					/>
				)}
			/>
		}
		label="Remember me"
	/>
);

export default CheckBoxRemember;
