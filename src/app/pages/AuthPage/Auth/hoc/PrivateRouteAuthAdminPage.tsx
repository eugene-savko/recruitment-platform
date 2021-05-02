/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import IPrivateRouteAuthAdminPage from '../types/IPrivateRouteAuthAdminPage';
import { authContext } from '../../../../context/AuthLoggedContext';
import { AuthCircularProgress } from '../components';

export const PrivateRouteAuthAdminPage: React.FunctionComponent<IPrivateRouteAuthAdminPage> = ({
	children,
	...restProps
}) => {
	const { auth } = useContext(authContext);

	if (auth.loading) {
		return (
			<Route
				{...restProps}
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
	console.log(auth.dataRole);
	return (
		<Route
			{...restProps}
			render={() => {
				return auth.dataRole ? children : <Redirect to="/login" />;
			}}
		/>
	);
};
