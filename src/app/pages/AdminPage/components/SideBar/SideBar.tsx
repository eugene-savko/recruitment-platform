import React, { useEffect } from 'react';
import { Drawer, Hidden } from '@material-ui/core';
import {
	unstable_createMuiStrictModeTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import { SideBarContent } from './SideBarContent';

const theme = unstable_createMuiStrictModeTheme();

interface ISideBar {
	openMobile: boolean;
	onMobileClose: () => void;
}

export const Sidebar = ({ onMobileClose, openMobile }: ISideBar) => {
	const location = useLocation();

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
	}, [location.pathname]);

	return (
		<ThemeProvider theme={theme}>
			<Hidden only={['md', 'lg', 'xl']}>
				<Drawer
					onClose={onMobileClose}
					open={openMobile}
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
	);
};
