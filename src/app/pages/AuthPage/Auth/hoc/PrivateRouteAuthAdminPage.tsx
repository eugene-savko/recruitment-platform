/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from 'app/pages/AdminPage/components/Preloader';
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
							<Preloader />
						</AuthCircularProgress>
					);
				}}
			/>
		);
	}
	return (
		<Route
			{...restProps}
			render={() => {
				return auth.dataRole ? children : <Redirect to="/login" />;
			}}
		/>
	);
};
