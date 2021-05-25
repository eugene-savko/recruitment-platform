import React, { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { IFormInput } from 'app/pages/AuthPage/Auth/types';

import { authContext } from 'app/contexts/AuthLoggedContext';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Grid } from '@material-ui/core';
import { AdminRoutePath } from 'app/pages/AdminPage/routes';
import { validation } from './helpers/validation';
import { AuthWrapper, AuthForm, AuthImg } from './components';
import ButtonSubmint from './ButtonSubmint';
import InputPassword from './InputPassword';
import InputEmail from './InputEmail';
import AuthTitle from './components/AuthTitle';
import { AuthErrors } from './AuthErrors';

const defaultValues: IFormInput = {
	username: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FunctionComponent = () => {
	const history = useHistory();
	const { handleSubmit, errors, register } = useForm({
		defaultValues,
	});
	const { logIn, auth } = useContext(authContext);

	const getInputsForm = async (dataLogin: IFormInput) => {
		logIn?.(dataLogin);
		history.replace(AdminRoutePath.DASHBOARD);
	};

	return (
		<React.Fragment>
			<AuthWrapper elevation={10}>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justify="center"
				>
					<AuthImg>
						<LockOpenIcon fontSize="large" />
					</AuthImg>
					<AuthTitle>Sign in recruiting platform </AuthTitle>
				</Grid>

				<AuthForm noValidate onSubmit={handleSubmit(getInputsForm)}>
					<InputEmail ref={register(validation.username)} />
					<AuthErrors
						errorsUserName={errors.username}
						errorsMessage={errors.username?.message}
						isError={auth.hasError}
					/>

					<InputPassword ref={register(validation.password)} />
					<AuthErrors
						errorsUserName={errors.password}
						errorsMessage={errors.password?.message}
						isError={auth.hasError}
					/>
					<ButtonSubmint />
				</AuthForm>
			</AuthWrapper>
		</React.Fragment>
	);
};
