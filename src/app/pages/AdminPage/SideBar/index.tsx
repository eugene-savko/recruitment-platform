import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Drawer, Hidden } from '@material-ui/core';

import {
	unstable_createMuiStrictModeTheme,
	ThemeProvider,
} from '@material-ui/core/styles';

import { SideBarContent } from './SideBarContent';

import { IPropsSideBar } from './types';

const theme = unstable_createMuiStrictModeTheme();

export const Sidebar: React.FunctionComponent<IPropsSideBar> = ({
	closeSideBar,
	openSideBar,
}: IPropsSideBar) => {
	const location = useLocation();

	useEffect(() => {
		if (openSideBar && closeSideBar) {
			closeSideBar();
		}
	}, [location.pathname]);

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Hidden only={['md', 'lg', 'xl']}>
					<Drawer
						onClose={closeSideBar}
						open={openSideBar}
						anchor="left"
						variant="temporary"
						PaperProps={{
							style: {
								width: 256,
							},
						}}
					>
						<SideBarContent />
					</Drawer>
				</Hidden>
				<Hidden only={['xs', 'sm']}>
					<Drawer
						anchor="left"
						open
						variant="persistent"
						PaperProps={{
							style: {
								width: 256,
								top: 64,
								height: 'calc(100% - 64px)',
							},
						}}
					>
						<SideBarContent />
					</Drawer>
				</Hidden>
			</ThemeProvider>
		</React.Fragment>
	);
};
