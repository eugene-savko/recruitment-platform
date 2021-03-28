import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Grid, TextField, Typography, Box, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Alert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import { IFormInputs } from 'app/components/Auth/types/AuthTypes';
import {
	SPaper,
	SAvatar,
	SButton,
	SNavLink,
	SError,
} from 'app/components/Auth/styled/style';
import useMocoServer from './hooks/useMocoServer';

const defaultValues = {
	email: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FC = () => {
	const { setDataFromUser, handleLogin, isAuth, setIsAuth } = useMocoServer();
	const { handleSubmit, errors, register, control } = useForm<IFormInputs>({
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
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justify="center"
					>
						<SAvatar>
							<LockOutlinedIcon />
						</SAvatar>
						<h2>Личный кабинет</h2>
					</Grid>
					<Box>
						<TextField
							inputRef={register({
								required: 'Заполните поле',
								pattern: {
									value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
									message: 'Неподходящая электронная почта',
								},
							})}
							type="email"
							name="email"
							label="Email"
							placeholder="Enter email"
							defaultValue=""
							fullWidth
						/>
						{errors.email && <SError>{errors.email.message}</SError>}
					</Box>
					<Box>
						<TextField
							inputRef={register({
								required: 'Заполните поле',
								minLength: {
									value: 6,
									message: 'Минимальная длина 6 символов',
								},
							})}
							name="password"
							label="Password"
							placeholder="Enter password"
							defaultValue=""
							type="password"
							fullWidth
						/>
						{errors.password && <SError>{errors.password.message}</SError>}
					</Box>
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
					<SButton type="submit" color="primary" variant="contained" fullWidth>
						Войти
					</SButton>
					<Typography>
						<SNavLink to="/repassword">Восстановить пароль</SNavLink>
					</Typography>
					<Typography>
						<SNavLink to="/register">Регистрация</SNavLink>
					</Typography>
				</form>
			</SPaper>

			{isAuth && <Alert severity="success">Auth Successfull</Alert>}
			{isAuth && (
				<Button
					variant="contained"
					color="secondary"
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
