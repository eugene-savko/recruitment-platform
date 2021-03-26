import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Recruiter } from '../pagesTEMP/RecruiterTEMP';
import { Auth } from '../index';

export const AppAUTH = () => (
	<>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Auth} />
				<Route path="/recruiter" component={Recruiter} />
			</Switch>
		</BrowserRouter>
	</>
);
