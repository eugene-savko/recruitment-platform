import React from 'react';
import { Button } from '@material-ui/core';

export const SubmitButton: React.FunctionComponent = ({
	children,
	...props
}) => {
	return (
		<Button type="submit" variant="contained" color="primary" {...props}>
			{children}
		</Button>
	);
};
