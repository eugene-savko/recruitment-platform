import React from 'react';
import { Header } from 'app/components/Header/Header';
import { Sidebar } from 'app/components/SideBar/SideBar';

export const HomePage: React.FunctionComponent = () => (
	<>
		<Sidebar />
		<Header />
	</>
);
