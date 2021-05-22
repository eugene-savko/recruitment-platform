import React from 'react';

import WrapperPreloader from './components/WrapperPreloader';
import Logo from './components/Logo';

const Preloader: React.FunctionComponent = () => {
	return (
		<WrapperPreloader>
			<Logo />
		</WrapperPreloader>
	);
};

export default Preloader;
