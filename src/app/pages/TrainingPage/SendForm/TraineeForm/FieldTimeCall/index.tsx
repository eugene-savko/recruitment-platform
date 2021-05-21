import React, { useState, useEffect } from 'react';

import { fetchTimeStamp } from 'app/API/timeInterval';
import { TimeStampArr } from '../../data/listTimeForCall';

import { IFieldTimeCall, ITimeStamp } from '../../types';
import { InputTimeCall, SelectWrapper, Select } from '../components';
import LabelTimeCall from '../components/LabelTimeCall';

export const FieldTimeCall: React.FunctionComponent<IFieldTimeCall> = ({
	register,
}) => {
	const [timeCall, setTimeCall] = useState<Array<ITimeStamp>>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchTimeStamp();
				setTimeCall(data);
			} catch (e) {
				// insurance
				setTimeCall(TimeStampArr);
			}
		};

		fetchData();
	}, []);

	const arrayTimeStamp = timeCall.map(({ id, startTime, endTime }) => {
		const startDate = new Date(startTime);
		const endDate = new Date(endTime);

		return {
			id,
			time: `${
				startDate.getHours() + startDate.getTimezoneOffset() / 60
			}.00 - ${endDate.getHours() + endDate.getTimezoneOffset() / 60}.00`,
		};
	});

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
					{arrayTimeStamp?.map(({ id, time }) => (
						<option value={id} key={id}>
							{time}
						</option>
					))}
				</Select>
			</SelectWrapper>
		</InputTimeCall>
	);
};
