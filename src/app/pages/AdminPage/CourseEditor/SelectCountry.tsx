import { TextField } from '@material-ui/core';
import { fetchListCities, fetchListCountries } from 'app/API/CourseEditor';
import React, { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { defaultValues } from './index';

interface IListContry {
	id: number;
	name: string;
	iso2?: string;
}
interface IListCity {
	id: number;
	name: string;
}

export const SelectCountry: React.FC = () => {
	const [cIso, setCiso] = useState(defaultValues.country.iso2);
	const [loadedListCountry, setLoadedListCountry] = useState(false);
	const [listCountry, setListCountry] = useState<IListContry[]>([]);
	const [listCities, setListCities] = useState<IListCity[]>([]);
	const { control, setValue } = useFormContext();

	useEffect(() => {
		(async () => {
			setListCountry(await fetchListCountries());
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setListCities(await fetchListCities(cIso));
			setLoadedListCountry(true);
		})();
	}, [cIso]);

	return (
		<React.Fragment>
			<Controller
				name="country"
				control={control}
				render={(props) => (
					<Autocomplete
						{...props}
						options={listCountry}
						onChange={(e, data) => {
							props.onChange(data);
							setCiso(data?.iso2);
						}}
						value={props.value}
						renderOption={(option) => <span>{option.name}</span>}
						getOptionLabel={(option) => option.name}
						getOptionSelected={(option, value) => option.name === value.name}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Choose a country"
								variant="outlined"
								margin="normal"
							/>
						)}
					/>
				)}
			/>
			{loadedListCountry && (
				<Controller
					name="cities"
					control={control}
					render={({ value, onChange }) => (
						<Autocomplete
							multiple
							disableCloseOnSelect
							filterSelectedOptions
							limitTags={2}
							id="citiesList"
							value={value}
							onChange={(e, data) => {
								onChange(data);
								setValue('cities', data);
							}}
							options={listCities}
							getOptionLabel={(option) => option.name}
							getOptionSelected={(option, val) => option.name === val.name}
							renderInput={(params) => (
								<TextField
									{...params}
									id="CitiesList"
									name="city"
									variant="outlined"
									label="City"
									margin="normal"
								/>
							)}
						/>
					)}
				/>
			)}
		</React.Fragment>
	);
};
