import { Button } from '@material-ui/core';
import React from 'react';
import { ListItemProps } from './types';

export const ListItem: React.FunctionComponent<ListItemProps> = ({
	course,
	destination,
	info,
}) => (
	<>
		<div className="list-item">
			<div className="mainInfo">
				<h2>{course}</h2>
				<h4>{destination}</h4>
				<Button variant="contained" color="secondary">
					Hot
				</Button>
			</div>
			<p className="description">{info}</p>
			<Button variant="contained" color="primary">
				Подробнее
			</Button>
		</div>
	</>
);
