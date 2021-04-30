import React, { BaseSyntheticEvent } from 'react';
import { Form, FormButton } from './components';

export interface ITableForm {
	children: React.ReactNode;
	onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
	close: () => void;
}
export const FormTable: React.FunctionComponent<ITableForm> = ({
	children,
	onSubmit,
	close,
}) => {
	return (
		<Form onSubmit={onSubmit} noValidate>
			{children}
			<FormButton autoFocus onClick={() => close()}>
				Back
			</FormButton>
			<FormButton type="submit" autoFocus>
				Search
			</FormButton>
		</Form>
	);
};
