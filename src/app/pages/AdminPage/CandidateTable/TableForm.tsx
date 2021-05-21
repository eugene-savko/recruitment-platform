import React, { BaseSyntheticEvent } from 'react';

import { Form, FormButton } from './components';

export interface ITableForm {
	children: React.ReactNode;
	onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
	close: () => void;
}
export const TableForm: React.FunctionComponent<ITableForm> = ({
	children,
	onSubmit,
	close,
}) => {
	return (
		<Form onSubmit={onSubmit} noValidate>
			{children}
			<FormButton autoFocus onClick={close}>
				Back
			</FormButton>
			<FormButton type="submit" autoFocus onClick={close}>
				Search
			</FormButton>
		</Form>
	);
};
