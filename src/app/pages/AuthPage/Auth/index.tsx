import React from 'react';

import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import { IFormInput } from 'app/pages/AuthPage/Auth/types';

import {
	AuthButtonSubmit,
	AuthErrorLabel,
	AuthWrapper,
	AuthForm,
} from './components/styled';

import {
	Title,
	InputPassword,
	CheckBoxRemember,
	InputEmail,
} from './components';

import useMocoServer from './hooks/useMocoServer';

import { validation } from './helpers/validation';

const defaultValues = {
	email: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FC = () => {
	const { isAuth, fetchRequestLogin } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});

	const onSubmit = (dataLogin: IFormInput) => {
		fetchRequestLogin(dataLogin);
	};

	return (
		<div>
			<AuthWrapper elevation={10}>
				<Title />
				<AuthForm noValidate onSubmit={handleSubmit(onSubmit)}>
					<InputEmail ref={register(validation.email)} />

					{errors.email && (
						<AuthErrorLabel>{errors.email.message}</AuthErrorLabel>
					)}

					<InputPassword ref={register(validation.password)} />

					{errors.password && (
						<AuthErrorLabel>{errors.password.message}</AuthErrorLabel>
					)}

					<CheckBoxRemember control={control} />

					<AuthButtonSubmit
						type="submit"
						color="primary"
						variant="contained"
						fullWidth
					>
						Войти
					</AuthButtonSubmit>
				</AuthForm>
				{isAuth && <Redirect exact from="/" to="/admin" />}
			</AuthWrapper>
			<p>eve.holt@reqres.in</p>
			<p>cityslicka</p>
		</div>
	);
};
