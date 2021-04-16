import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import IPrivateRouteAuthAdminPage from '../types/IPrivateRouteAuthAdminPage';
// will be remove after getting API
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const { isLogged } = useContext(AuthLoggedContext);
const isLogeedLocalStorage = localStorage.getItem('IsLoaded');

export const PrivateRouteAuthAdminPage: React.FunctionComponent<IPrivateRouteAuthAdminPage> = ({
	children,
	path,
}: IPrivateRouteAuthAdminPage): JSX.Element => (
	<Route
		path={path}
		render={() => (isLogeedLocalStorage ? children : <Redirect to="/" />)}
	/>
);
