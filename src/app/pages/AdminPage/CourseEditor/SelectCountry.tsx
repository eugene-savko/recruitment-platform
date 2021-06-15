import { TextField } from '@material-ui/core';
import { fetchListCities, fetchListCountries } from 'app/API/CourseEditor';
import React, { useState, useEffect, useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { defaultValues } from './index';
import { CourseEditorError } from './CourseEditorError';
import { SelectCourseContext } from '../../../contexts/SelectCourseContext';

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
	const { defaultValues } = useContext(SelectCourseContext);
	const [cIso, setCiso] = useState(defaultValues.country.iso2);
	const [loadedListCountry, setLoadedListCountry] = useState(false);
	const [listCountry, setListCountry] = useState<IListContry[]>([]);
	const [listCities, setListCities] = useState<IListCity[]>([]);
	const { errors, control, setValue } = useFormContext();

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
				rules={{ required: 'Choose a country' }}
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
								style={{ marginBottom: '0px' }}
								label="Choose a country"
								variant="outlined"
								margin="normal"
							/>
						)}
					/>
				)}
			/>
			<CourseEditorError
				nameInputElement={errors.country}
				messageError={errors.country?.message}
			/>

			{loadedListCountry && (
				<Controller
					name="cities"
					control={control}
					rules={{
						validate: {
							isEmptyListCities: (value) => value.length > 0 || 'Choose a city',
						},
					}}
					render={({ value, onChange }) => (
						<Autocomplete
							multiple
							disableCloseOnSelect
							filterSelectedOptions
							limitTags={2}
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
									style={{ marginBottom: '0' }}
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

			<CourseEditorError
				nameInputElement={errors.cities}
				messageError={errors.cities?.message}
			/>
		</React.Fragment>
	);
};
