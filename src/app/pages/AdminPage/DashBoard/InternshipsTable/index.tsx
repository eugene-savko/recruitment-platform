import React from 'react';
import {
	InternshipObjectEntity,
	InternshipsObject,
} from '../types/internshipTypes';
import InternshipsComponent from './components/internshipsComponent';

interface InternshipsTableProps {
	setModalActive: (active: boolean) => void;
	setModalData: (internshipDetailed: InternshipObjectEntity) => void;
	internships: InternshipsObject;
}

export const InternshipsTable: React.FunctionComponent<InternshipsTableProps> = ({
	setModalActive,
	setModalData,
	internships,
}) => {
	const internshipsTable = Object.keys(internships).map((internshipName) => (
		<tr key={internshipName}>
			<td className="internship-name">{internshipName}</td>
			<td className="status">{internships[internshipName].status}</td>
			<td className="registered">{internships[internshipName].registered}</td>
			<td className="admitted">{internships[internshipName].admitted}</td>
			<td className="onProcessing">
				{internships[internshipName].onProcessing}
			</td>
			<td
				role="none"
				className="details"
				onClick={() => {
					console.log({
						...internships[internshipName],
						name: internshipName,
					});
					setModalActive(true);
					setModalData({
						...internships[internshipName],
						name: internshipName,
					});
				}}
			>
				View Details
			</td>
			<td className="deadLine">{internships[internshipName].deadLine}</td>
		</tr>
	));

	return (
		<React.Fragment>
			<InternshipsComponent>
				<thead>
					<tr>
						<th rowSpan={2}>Internships</th>
						<th rowSpan={2}>Status</th>
						<th colSpan={3}>Number of trainees</th>
						<th rowSpan={2}>Details</th>
						<th rowSpan={2}>Due date</th>
					</tr>
					<tr className="trainee-number">
						<th>Registered</th>
						<th>Admitted</th>
						<th>On processing</th>
					</tr>
				</thead>
				<tbody>{internshipsTable}</tbody>
			</InternshipsComponent>
		</React.Fragment>
	);
};

export default InternshipsTable;
