import React from 'react';
import ReactDOM from 'react-dom';
import AuthLoggedContextProvider from 'app/context/AuthLoggedContext';
import { App } from './app';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
	<React.StrictMode>
		<AuthLoggedContextProvider>
			<App />
		</AuthLoggedContextProvider>
	</React.StrictMode>,
	MOUNT_NODE
);
