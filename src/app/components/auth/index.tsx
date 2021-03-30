import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Grid, TextField, Typography, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { SPaper, SAvatar, SButton, SNavLink, SError } from './styled/style';

// ________________________________________

interface ITypeData {
	status: number;
	data: {
		user: {
			name: string,
			password: string,
			role: string,
		},
	};
}

interface IFormInputs {
	email: string;
	password: string;
	checkbox: boolean;
}

const defaultValues = {
	email: '',
	password: '',
	checkbox: false,
};

export const Auth: React.FunctionComponent = () => {
	const history = useHistory();
	const { handleSubmit, errors, register, control } = useForm<IFormInputs>({
		defaultValues,
	});

	const mocaServer = (data: IFormInputs) =>
		new Promise<string>((resolved) => {
			setTimeout(
				() =>
					resolved(
						JSON.stringify({
							status: 200,
							data: {
								user: {
									name: data.email,
									password: data.password,
									role: 'admin',
								},
							},
						})
					),
				2000
			);
		});

	const onSubmit = async (dataLogin: IFormInputs) => {
		const dataFromServer = await mocaServer(dataLogin);
		const value: ITypeData = JSON.parse(dataFromServer);
		if (value.status <= 200) {
			history.push('/recruiter');
		}
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
								rules={{ required: true }}
								render={(props) => (
									<Checkbox
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
		</Grid>
	);
};
