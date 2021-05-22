import React from 'react';
import { FieldError } from 'react-hook-form';
import { AuthErrorLabel } from './components';

interface IAuthError {
	errorsUserName: FieldError | undefined;
	errorsMessage: string | undefined;
	isError: boolean;
}

export const AuthErrors: React.FC<IAuthError> = ({
	errorsUserName,
	errorsMessage,
	isError,
}: IAuthError) => {
	return (
		<React.Fragment>
			{errorsUserName && <AuthErrorLabel>{errorsMessage}</AuthErrorLabel>}
			{isError && <AuthErrorLabel>Check your email or password</AuthErrorLabel>}
		</React.Fragment>
	);
};
