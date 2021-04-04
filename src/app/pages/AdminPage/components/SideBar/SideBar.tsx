import React from 'react';
import { Drawer, Hidden } from '@material-ui/core';

import { SideBarContent } from './SideBarContent';

export const Sidebar = () => {
	console.log('Sidebar');

	return (
		<>
			<Hidden only={['md', 'lg', 'xl']}>
				<Drawer
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
		</>
	);
};
