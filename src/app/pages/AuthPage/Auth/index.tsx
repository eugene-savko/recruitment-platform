import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import {
	IDefaultValueInputForm,
	IFormInput,
} from 'app/pages/AuthPage/Auth/types';

import { AuthLoggedContext } from 'app/context/AuthLoggedContext';

import useMocoServer from './hooks/useMocoServer';

import { validation } from './helpers/validation';

import { AuthErrorLabel, AuthWrapper, AuthForm } from './components';
import CheckBoxRemember from './CheckBoxRemember';
import ButtonSubmint from './ButtonSubmint';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import AuthTitle from './components/AuthTitle';

const defaultValues: IDefaultValueInputForm = {
	username: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FunctionComponent = () => {
	const { isLogged } = useContext(AuthLoggedContext);
	const { fetchRequestLogin } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});

	const getInputsForm = async (dataLogin: IFormInput) => {
		fetchRequestLogin(dataLogin);
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

				{isLogged && <Redirect exact from="/" to="/admin" />}
			</AuthWrapper>
			<p>eve.holt@reqres.in</p>
			<p>cityslicka</p>
			<p>alice.blue@gmail.com</p>
			<p>12345</p>
		</React.Fragment>
	);
};
