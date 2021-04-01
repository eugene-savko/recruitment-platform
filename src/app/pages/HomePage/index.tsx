import React from 'react';
import { Auth } from 'app/components/Auth';
import { Header } from 'app/components/Header/Header';

export const HomePage: React.FunctionComponent = () => (
	<>
		<Header />
		<Auth />;
	</>
);
