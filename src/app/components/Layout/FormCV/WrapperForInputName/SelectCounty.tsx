import React, { useState } from 'react';

// styles
import { InputLabel, MenuItem, Select } from '@material-ui/core/';
import { SelectStyle } from './component/SelectStyle';
import { WrapperForTowColomn } from './component/WrapperForTowColomn';
import { BlockForInputs } from './component/BlokForInputs';

// interface
import { ISelectCountry, ISelectCity } from './types/types';

interface ISelectProps {
	selectCountryData: Array<ISelectCountry>;
	selectCityyData: Array<ISelectCity>;
}

interface ICityName {
	city: string;
}

interface ICountryName {
	title?: string;
	data: string;
}

interface ISelecDataCitys {
	order: Array<{ city: string }>;
}

export const SelectCounty: React.FunctionComponent<ISelectProps> = ({
	selectCountryData,
	selectCityyData,
}) => {
	const [country, setCountry] = useState<ICountryName>({
		title: 'Country',
		data: '',
	});
	const [selecDataCitys, setSelecDataCitys] = useState<ISelecDataCitys>({
		order: selectCityyData[0].data,
	});

	const [city, setCity] = useState<ICityName>();

	const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
		// Syntax error Prettire
		const selectTarget = event.target.value;
		setCountry({ title: 'Country', data: selectTarget });

		switch (selectTarget) {
			case 'Belarus':
				setSelecDataCitys({ order: selectCityyData[0].data });
				break;
			case 'Georgia':
				setSelecDataCitys({ order: selectCityyData[1].data });
				break;
			case 'Lithuania':
				setSelecDataCitys({ order: selectCityyData[2].data });
				break;
			case 'Poland':
				setSelecDataCitys({ order: selectCityyData[3].data });
				break;
			case 'Russia':
				setSelecDataCitys({ order: selectCityyData[4].data });
				break;
			case 'Ukraine':
				setSelecDataCitys({ order: selectCityyData[5].data });
				break;
			case 'United States':
				setSelecDataCitys({ order: selectCityyData[6].data });
				break;
			case 'Uzbekistan':
				setSelecDataCitys({ order: selectCityyData[7].data });
				break;
			default:
				break;
		}
	};

	return (
		<React.Fragment>
			<WrapperForTowColomn>
				<BlockForInputs>
					<SelectStyle variant="outlined">
						<InputLabel id="customized select label">
							{country.title}
						</InputLabel>
						<Select
							labelId="customized select course"
							id="customized select"
							required
							value={country.data}
							onChange={handleChange}
							label={country.title}
						>
							{selectCountryData?.map((item) => (
								<MenuItem value={item.data}>
									<span>{item.data}</span>
								</MenuItem>
							))}
						</Select>
					</SelectStyle>
				</BlockForInputs>
				<BlockForInputs>
					<SelectStyle variant="outlined">
						<InputLabel id="customized select label">
							{/* {numCity.defaultDate} */}
						</InputLabel>
						<Select
							labelId="customized select course"
							id="customized select"
							required
							// value={numCity.defaultDate}
							// onChange={handleChange}
							// label={numCity.defaultDate}
						>
							{selecDataCitys.order?.map((item) => (
								<MenuItem value={item.city}>
									<span>{item.city}</span>
								</MenuItem>
							))}
						</Select>
					</SelectStyle>
				</BlockForInputs>
			</WrapperForTowColomn>
		</React.Fragment>
	);
};
