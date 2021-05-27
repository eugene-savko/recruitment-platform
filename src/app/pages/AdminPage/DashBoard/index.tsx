import React, { useState, useEffect } from 'react';
import { fetchDashboardData } from 'app/API/getDashboardData';
import { TotalStats } from './TotalStats';
import { InternshipsTable } from './InternshipsTable';
import { DetailedCourseInfo } from './DetailedCourseInfo';
import { mapInternships } from './getInternships';

export const DashBoard: React.FunctionComponent = () => {
	const [modalActive, setModalActive] = useState(false);
	const [modalData, setModalData] = useState({});
	const [internships, setInternships] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchDashboardData();
				const internshipsObject = mapInternships(data);
				setInternships(internshipsObject);
			} catch (e) {
				console.error(e);
			}
		};
		fetchData();
	}, []);
	return (
		<React.Fragment>
			<TotalStats />
			<InternshipsTable
				setModalActive={setModalActive}
				setModalData={setModalData}
				internships={internships}
			/>
			<DetailedCourseInfo
				active={modalActive}
				modalData={modalData}
				setActive={setModalActive}
			/>
		</React.Fragment>
	);
};
