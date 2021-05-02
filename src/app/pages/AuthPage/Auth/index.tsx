import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { IFormInput } from 'app/pages/AuthPage/Auth/types';

import { authContext } from 'app/context/AuthLoggedContext';

import { validation } from './helpers/validation';

import { AuthErrorLabel, AuthWrapper, AuthForm } from './components';
import CheckBoxRemember from './CheckBoxRemember';
import ButtonSubmint from './ButtonSubmint';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import AuthTitle from './components/AuthTitle';

const defaultValues: IFormInput = {
	username: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FunctionComponent = () => {
	const history = useHistory();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});
	const { setAuthData } = useContext(authContext);

	const getInputsForm = async (dataLogin: IFormInput) => {
		setAuthData?.(dataLogin);
		history.replace('/');
	};

	return (
		<React.Fragment>
			<AuthWrapper elevation={10}>
				<AuthTitle>Sign In</AuthTitle>

				<AuthForm noValidate onSubmit={handleSubmit(getInputsForm)}>
					<InputEmail ref={register(validation.username)} />
					{errors.username && (
						<AuthErrorLabel>{errors.username.message}</AuthErrorLabel>
					)}

					<InputPassword ref={register(validation.password)} />
					{errors.password && (
						<AuthErrorLabel>{errors.password.message}</AuthErrorLabel>
					)}

					<CheckBoxRemember control={control} />

					<ButtonSubmint />
				</AuthForm>
			</AuthWrapper>
			<p>kate.yellow@gmail.com</p>
			<p>67890</p>
		</React.Fragment>
	);
};
