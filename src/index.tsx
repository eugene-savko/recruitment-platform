import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from 'app/context/AuthLoggedContext';
import StateMainContextProvider from 'app/context/StateMainContext';
import { App } from './app';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
	<React.StrictMode>
		<StateMainContextProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</StateMainContextProvider>
	</React.StrictMode>,
	MOUNT_NODE
);
