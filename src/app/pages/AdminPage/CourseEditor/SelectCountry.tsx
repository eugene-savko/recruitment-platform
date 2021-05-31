import {
	Box,
	Chip,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@material-ui/core';
import { fetchListCities, fetchListCountries } from 'app/API/CourseEditor';
import React, { useState, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types/form';

interface IListContry {
	id: number;
	name: string;
	iso2?: string;
}
interface IListCity {
	id: number;
	name: string;
}

interface IFormInput {
	select: string;
	nameCourse: string;
}
interface ISeclectCountryProps {
	control: Control<IFormInput>;
}

export const SelectCountry = () => {
	const [countryIso, setCountryIso] = useState('');
	const [listCountry, setListCountry] = useState<IListContry[]>([]);
	const [listCities, setListCities] = useState<IListCity[]>([]);
	const [personName, setPersonName] = useState<string[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			setListCountry(await fetchListCountries());
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			if (countryIso !== '') {
				setListCities(await fetchListCities(countryIso));
			}
		};
		fetchData();
	}, [countryIso]);

	const handleChangeCountry = (e: any) => {
		setCountryIso(e.target.value);
	};

	const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
		setPersonName(e.target.value as string[]);
	};
	return (
		<React.Fragment>
			<FormControl margin="normal" variant="outlined" fullWidth>
				<InputLabel htmlFor="multiple-country">List of country</InputLabel>

				<Select
					id="multiple-country"
					value={countryIso}
					onChange={handleChangeCountry}
					label="List of country"
					inputProps={{
						name: 'value',
						id: 'outlined-country',
					}}
				>
					<MenuItem value="" disabled>
						List of country
					</MenuItem>
					{listCountry?.map(({ id, name, iso2 }) => (
						<MenuItem key={id} value={iso2}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<div>
				<FormControl margin="normal" fullWidth variant="outlined">
					<InputLabel htmlFor="multiple-cities">List of cities</InputLabel>
					<Select
						value={personName}
						onChange={handleChange}
						multiple
						label="List of cities "
						id="multiple-cities"
						renderValue={(selected) => (
							<div style={{ display: 'flex', flexWrap: 'wrap' }}>
								{(selected as string[]).map((value) => (
									<Chip key={value} label={value} style={{ margin: 2 }} />
								))}
							</div>
						)}
					>
						{listCities.map(({ name }) => (
							<MenuItem key={name} value={name}>
								{name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</React.Fragment>
	);
};
