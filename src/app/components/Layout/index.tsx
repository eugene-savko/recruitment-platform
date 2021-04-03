import Header from 'app/components/Layout/Header';
import React from 'react';

export const Layout: React.FunctionComponent = ({ children }) => (
	<React.Fragment>
		<Header />
		{children}
	</React.Fragment>
);
