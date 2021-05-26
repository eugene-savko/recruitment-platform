import React from 'react';
import { NotFoundPageWrapper } from './components/NotFoundPageWrapper';

export const NotFoundPage: React.FunctionComponent = () => (
	<React.Fragment>
		<NotFoundPageWrapper>
			<div className="circles">
				<p>404</p>
				<small>PAGE NOT FOUND</small>
				<span className="circle big" />
				<span className="circle med" />
				<span className="circle small" />
			</div>
		</NotFoundPageWrapper>
	</React.Fragment>
);
