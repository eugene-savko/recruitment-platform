import React from 'react';
import { Auth } from 'app/components/Auth';
import { Header } from 'app/components/Header/Header';
import { Sidebar } from 'app/components/SideBar/Sidebar';

export const HomePage: React.FunctionComponent = () => (
	<>
		<Sidebar />
		<Header />
		<Auth />;
	</>
);
