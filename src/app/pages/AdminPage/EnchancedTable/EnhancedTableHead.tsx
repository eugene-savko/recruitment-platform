import {
	Checkbox,
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import React from 'react';

type Order = 'asc' | 'desc';
interface Data {
	calories: number;
	carbs: number;
	fat: number;
	name: string;
	protein: number;
}
interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: HeadCell[] = [
	{
		id: 'name',
		numeric: false,
		disablePadding: true,
		label: 'Dessert (100g serving)',
	},
	{ id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
	{ id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
	{ id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
	{ id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
];

interface EnhancedTableProps {
	classes: ReturnType<
		(
			props?: string
		) => ClassNameMap<'table' | 'root' | 'paper' | 'visuallyHidden'>
	>;
	numSelected: number;
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
}

export const EnhancedTableHead: React.FunctionComponent<EnhancedTableProps> = ({
	classes,
	onSelectAllClick,
	order,
	orderBy,
	numSelected,
	rowCount,
	onRequestSort,
}) => {
	const createSortHandler = (property: keyof Data) => (
		event: React.MouseEvent<unknown>
	) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'select all desserts' }}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<span className={classes.visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</span>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};
