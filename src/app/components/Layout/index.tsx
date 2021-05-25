import React from 'react';

import Header from './Header';
import Footer from './Footer';

export const Layout: React.FunctionComponent = ({ children }) => (
	<React.Fragment>
		<Header />
		{children}
		<Footer />
	</React.Fragment>
);
