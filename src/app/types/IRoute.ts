import { FunctionComponent } from 'react';

interface IRoute {
	exact: boolean;
	path: string;
	component: FunctionComponent<any>;
}

export default IRoute;
