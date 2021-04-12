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
import Title from './Title';

const defaultValues: IDefaultValueInputForm = {
	email: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FunctionComponent = () => {
	const { isLogged } = useContext(AuthLoggedContext);
	const { fetchRequestLogin } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});

	const getInputsForm = (dataLogin: IFormInput) => {
		console.log(dataLogin);
		fetchRequestLogin(dataLogin);
	};

	return (
		<>
			<AuthWrapper elevation={10}>
				<Title />

				<AuthForm noValidate onSubmit={handleSubmit(getInputsForm)}>
					<InputEmail ref={register(validation.email)} />
					{errors.email && (
						<AuthErrorLabel>{errors.email.message}</AuthErrorLabel>
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
		</>
	);
};
