import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import React, { useState } from 'react';

export const Locations = () => {
	const [state, setState] = useState({
		country: '',
		region: '',
	});

	const selectCountry = (val: any) => {
		console.log(val);
		// setState({ state: val });
	};

	// const selectRegion = (val: any) => {
	// 	setState({ state: val });
	// };
	const { country, region } = state;

	return (
		<div>
			<CountryDropdown value={country} onChange={(val) => selectCountry(val)} />
			{/* <RegionDropdown
				country={country}
				value={region}
				// onChange={(val) => selectRegion(val)}
			/> */}
		</div>
	);
};
