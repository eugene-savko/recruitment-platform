/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Controller } from 'react-hook-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { PropsCheck } from '../../types/AuthTypes';

export const Check: React.FC<PropsCheck> = ({ control }: PropsCheck) => (
	<FormControlLabel
		control={
			<Controller
				name="checkbox"
				control={control}
				render={(props) => (
					<Checkbox
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
