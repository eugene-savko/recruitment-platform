import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from 'app/contexts/AuthLoggedContext';

import { App } from './app';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider>
			<App />
		</AuthProvider>
	</React.StrictMode>,
	MOUNT_NODE
);
