import React from 'react';
import {
	createStyles,
	IconButton,
	lighten,
	makeStyles,
	Theme,
	Toolbar,
	Tooltip,
	Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import {
	Delete as DeleteIcon,
	FilterList as FilterListIcon,
} from '@material-ui/icons/';

const useToolbarStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1),
		},
		highlight:
			theme.palette.type === 'light'
				? {
						color: theme.palette.secondary.main,
						backgroundColor: lighten(theme.palette.secondary.light, 0.85),
				  }
				: {
						color: theme.palette.text.primary,
						backgroundColor: theme.palette.secondary.dark,
				  },
		title: {
			flex: '1 1 100%',
		},
	})
);

interface EnhancedTableToolbarProps {
	numSelected: number;
}

export const EnhancedTableToolbar: React.FunctionComponent<EnhancedTableToolbarProps> = ({
	numSelected,
}) => {
	const classes = useToolbarStyles();

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			{numSelected > 0 ? (
				<Typography
					className={classes.title}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					className={classes.title}
					variant="h6"
					id="tableTitle"
					component="div"
				>
					Nutrition
				</Typography>
			)}
			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton aria-label="delete">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton aria-label="filter list">
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};
