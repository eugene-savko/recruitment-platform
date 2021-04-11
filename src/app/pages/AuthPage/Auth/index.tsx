import React from 'react';

import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import {
	IDefaultValueInputForm,
	IFormInput,
} from 'app/pages/AuthPage/Auth/types';

import useMocoServer from './hooks/useMocoServer';

import { validation } from './helpers/validation';

import { AuthErrorLabel, AuthWrapper, AuthForm } from './components';
import { ButtonSubmint } from './ButtonSubmint';
import Title from './Title';
import InputPassword from './InputPassword';
import CheckBoxRemember from './CheckBoxRemember';
import InputEmail from './InputEmail';

const defaultValues: IDefaultValueInputForm = {
	email: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FunctionComponent = () => {
	const { isAuth, fetchRequestLogin } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});

	const getInputsForm = (dataLogin: IFormInput) => {
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
				{isAuth && <Redirect exact from="/" to="/admin" />}
			</AuthWrapper>
			<p>eve.holt@reqres.in</p>
			<p>cityslicka</p>
			<p>защита роутов</p>
		</>
	);
};
