import React from 'react';
import { Alert } from '@material-ui/lab';
import { IFormInputs } from 'app/components/Auth/types/AuthTypes';
import { Grid, Button, Box } from '@material-ui/core';

import { SPaper, SError } from 'app/components/Auth/styled/style';

import { useForm } from 'react-hook-form';
import useMocoServer from './hooks/useMocoServer';

import { Avatar } from './components/Avatar/Avatar';
import { InputEmail } from './components/InputEmail/InputEmail';
import { InputPassword } from './components/InputPassword/ImputPassword';
import { ButtonSubmit } from './components/ButtonSubmit/ButtonSubmit';
import { Check } from './components/Check/Check';

import { validation } from './helpers/validation';

export const Auth: React.FC = () => {
	const defaultValues = {
		email: '',
		password: '',
		checkbox: false,
	};

	const { setDataFromUser, handleLogin, isAuth, setIsAuth } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm({
		defaultValues,
	});

	const onSubmit = (dataLogin: IFormInputs) => {
		setDataFromUser(dataLogin);
		handleLogin();
	};

	return (
		<Grid>
			<SPaper elevation={10}>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Avatar />
					<Box>
						<InputEmail ref={register(validation.email)} />
						{errors.email && <SError>{errors.email.message}</SError>}
					</Box>
					<Box>
						<InputPassword ref={register(validation.password)} />
						{errors.password && <SError>{errors.password.message}</SError>}
					</Box>

					<Check control={control} />

					<ButtonSubmit />
				</form>
			</SPaper>

			{isAuth && <Alert severity="success">Auth Successfull</Alert>}
			{isAuth && (
				<Button
					onClick={() => {
						setIsAuth(false);
					}}
				>
					Logout
				</Button>
			)}
		</Grid>
	);
};
