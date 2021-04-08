import React from 'react';

import { useForm } from 'react-hook-form';

import { IFormInput } from 'app/pages/AuthPage/Auth/types';

import { Button } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

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
	const { setDataFromUser, handleLogin, isAuth, setIsAuth } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});

	const onSubmit = (dataLogin: IFormInput) => {
		console.log(dataLogin);
		setDataFromUser(dataLogin);
		handleLogin();
	};

	return (
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

			{isAuth && (
				<>
					<Alert severity="success">Auth Successfull</Alert>
					<Button onClick={() => setIsAuth(false)}>Logout</Button>
				</>
			)}
		</AuthWrapper>
	);
};
