import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import WrapperPreloader from './components/WrapperPreloader';
import Logo from './components/Logo';

const useStyles = makeStyles(() =>
	createStyles({
		loader: {
			color: '#0082ca',
		},
	})
);

const Preloader: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<WrapperPreloader>
			<Logo />
			<CircularProgress className={classes.loader} />
		</WrapperPreloader>
	);
};

export default Preloader;
