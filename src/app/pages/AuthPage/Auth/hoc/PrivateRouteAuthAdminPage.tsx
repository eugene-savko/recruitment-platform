import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import IPrivateRouteAuthAdminPage from '../types/IPrivateRouteAuthAdminPage';
import { AuthLoggedContext } from '../../../../context/AuthLoggedContext';

export const PrivateRouteAuthAdminPage: React.FunctionComponent<IPrivateRouteAuthAdminPage> = ({
	children,
	path,
}: IPrivateRouteAuthAdminPage): JSX.Element => {
	const { isLogged } = useContext(AuthLoggedContext);
	return (
		<Route
			path={path}
			render={() => (isLogged ? children : <Redirect to="/" />)}
		/>
	);
};
