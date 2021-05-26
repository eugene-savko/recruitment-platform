import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface IRoute {
	exact: boolean;
	path: string;
	component: ComponentType<RouteComponentProps>;
}

export default IRoute;
