import Header from 'app/components/Layout/Header';
import FormCV from 'app/components/Layout/FormCV';
import React from 'react';

export const Layout: React.FunctionComponent = ({ children }) => (
	<>
		<Header />
		<FormCV />
		{children}
	</>
);
