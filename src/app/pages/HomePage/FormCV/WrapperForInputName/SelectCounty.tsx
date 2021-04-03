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
	selectCityData: Array<ISelectCity>;
}

interface ICityName {
	city: string;
}

interface ICountryName {
	data: string;
}

interface ISelecDataCitys {
	order?: Array<{ city: string }>;
}

export const SelectCounty: React.FunctionComponent<ISelectProps> = ({
	selectCountryData,
	selectCityData,
}) => {
	const [country, setCountry] = useState<ICountryName>({
		data: 'Belarus',
	});
	const [selecDataCitys, setSelecDataCitys] = useState<ISelecDataCitys>({
		order: selectCityData[0].data,
	});

	// eslint-disable-next-line no-console
	console.log({ selecDataCitys });
	const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
		// Syntax error Prettire
		const selectTarget = event.target.value;
		setCountry({ data: selectTarget });
		// setSelecDataCitys({ title: 'City', order: selectTarget });
		switch (selectTarget) {
			case 'Belarus':
				setSelecDataCitys({ order: selectCityData[0].data });
				break;
			case 'Georgia':
				setSelecDataCitys({ order: selectCityData[1].data });
				break;
			case 'Lithuania':
				setSelecDataCitys({ order: selectCityData[2].data });
				break;
			case 'Poland':
				setSelecDataCitys({ order: selectCityData[3].data });
				break;
			case 'Russia':
				setSelecDataCitys({ order: selectCityData[4].data });
				break;
			case 'Ukraine':
				setSelecDataCitys({ order: selectCityData[5].data });
				break;
			case 'United States':
				setSelecDataCitys({ order: selectCityData[6].data });
				break;
			case 'Uzbekistan':
				setSelecDataCitys({ order: selectCityData[7].data });
				break;
			default:
				break;
		}
	};

	// eslint-disable-next-line no-console
	console.log({ selecDataCitys });

	return (
		<React.Fragment>
			<WrapperForTowColomn>
				<BlockForInputs>
					<SelectStyle variant="outlined">
						<Select required value={country.data} onChange={handleChange}>
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
						<Select
							required
							// value={selecDataCitys.order[0].city}
							// onChange={handleChange}
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
