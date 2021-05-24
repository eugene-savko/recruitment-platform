import React, { useState, useEffect } from 'react';

import { fetchTimeStamp } from 'app/API/timeInterval';
import { TimeStampArr } from '../../data/listTimeForCall';

import { IFieldTimeCall, ITimeCall } from '../../types';
import { InputTimeCall, SelectWrapper, Select } from '../components';
import LabelTimeCall from '../components/LabelTimeCall';

export const FieldTimeCall: React.FunctionComponent<IFieldTimeCall> = ({
	register,
}) => {
	const [timeCall, setTimeCall] = useState<Array<ITimeCall>>([]);

	useEffect(() => {
		const fetchData = async () => {
			let data;

			try {
				data = await fetchTimeStamp();
			} catch (e) {
				// insurance
				data = TimeStampArr;
			}
			const mappedData = data.map(({ id, startTime, endTime }) => {
				const startDate = new Date(startTime);
				const endDate = new Date(endTime);

				return {
					id,
					time: `${
						startDate.getHours() + startDate.getTimezoneOffset() / 60
					}.00 - ${endDate.getHours() + endDate.getTimezoneOffset() / 60}.00`,
				};
			});
			setTimeCall(mappedData);
		};

		fetchData();
	}, []);

	return (
		<InputTimeCall>
			<LabelTimeCall htmlFor="timeForCall">
				Please choose time to call:
			</LabelTimeCall>
			<SelectWrapper>
				<Select
					id="timeForCall"
					name="timeForCall"
					ref={register({ required: true })}
				>
					{timeCall?.map(({ id, time }) => (
						<option value={id} key={id}>
							{time}
						</option>
					))}
				</Select>
			</SelectWrapper>
		</InputTimeCall>
	);
};
