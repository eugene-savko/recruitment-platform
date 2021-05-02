/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import IPrivateRouteAuthAdminPage from '../types/IPrivateRouteAuthAdminPage';
import { authContext } from '../../../../context/AuthLoggedContext';
import { AuthCircularProgress } from '../components';

export const PrivateRouteAuthAdminPage: React.FunctionComponent<IPrivateRouteAuthAdminPage> = ({
	children,
	...rest
}) => {
	const { auth } = useContext(authContext);
	const { loading } = auth;

	if (loading) {
		return (
			<Route
				{...rest}
				render={() => {
					return (
						<AuthCircularProgress>
							<CircularProgress />
						</AuthCircularProgress>
					);
				}}
			/>
		);
	}

	return (
		<Route
			{...rest}
			render={() => {
				return auth.data ? children : <Redirect to="/sign-in" />;
			}}
		/>
	);
};
