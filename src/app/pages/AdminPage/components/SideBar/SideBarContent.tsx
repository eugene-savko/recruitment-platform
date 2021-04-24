/* eslint-disable camelcase */
import React from 'react';
import { Divider } from '@material-ui/core';
import { SideBarContentWrapper } from './components';
import { NavList } from './NavList';
import { UserPhoto } from './UserPhoto';

export const SideBarContent: React.FunctionComponent = () => (
	<SideBarContentWrapper>
		<UserPhoto />
		<Divider />
		<NavList />
	</SideBarContentWrapper>
);
