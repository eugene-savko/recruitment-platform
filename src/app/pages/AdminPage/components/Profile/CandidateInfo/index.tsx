import React from 'react';

import { ContainerInfo } from './component';

import IUserInfo from '../types/IUserInfo';

interface IInfo {
	info: IUserInfo;
}

export const CandidateInfo: React.FunctionComponent<IInfo> = ({ info }) => {
	return (
		<React.Fragment>
			<ContainerInfo>{info.email}</ContainerInfo>
		</React.Fragment>
	);
};
