import React from 'react';
import { Grid, TextField, Typography, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { SPaper, SAvatar, SButton, SNavLink } from './styled/style';

export const Auth: React.FunctionComponent = () => (
	<Grid>
		<SPaper elevation={10}>
			<form noValidate>
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
						type="email"
						name="email"
						label="Email"
						placeholder="Enter email"
						fullWidth
					/>
				</Box>
				<Box>
					<TextField
						name="password"
						label="Password"
						placeholder="Enter password"
						type="password"
						fullWidth
					/>
				</Box>

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
