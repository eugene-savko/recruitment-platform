import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import WrapperPreloader from './WrapperPreloader';

const Preloader: React.FunctionComponent = () => {
	return (
		<WrapperPreloader>
			<CircularProgress />
		</WrapperPreloader>
	);
};

export default Preloader;
