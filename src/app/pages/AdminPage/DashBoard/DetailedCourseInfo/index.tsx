import React from 'react';
import { InternshipObjectEntity } from '../types/internshipTypes';
import DetailedCourseInfoWrapper from './components/DetailedCourseInfoWrapper';

interface DetailedCourseInfoProps {
	active: boolean;
	setActive: (active: boolean) => void;
	modalData: InternshipObjectEntity | Record<string, unknown>;
}

export const DetailedCourseInfo: React.FunctionComponent<DetailedCourseInfoProps> = ({
	active,
	setActive,
	modalData,
}) => {
	return (
		<React.Fragment>
			<DetailedCourseInfoWrapper>
				<div
					role="none"
					className={active ? 'modal active' : 'modal'}
					onClick={() => setActive(false)}
				>
					<div
						role="none"
						className={active ? 'modal__content active' : 'modal__content'}
						onClick={(e) => e.stopPropagation()}
					>
						<h2 className="modal-title">
							{(modalData as InternshipObjectEntity).name}
						</h2>
						<p className="modal-date">
							<em>Due data: </em>
							{(modalData as InternshipObjectEntity).deadLine}
						</p>
						<table className="modal-table">
							<tr className="dash-rows">
								<th>Registered</th>
								<td>{(modalData as InternshipObjectEntity).registered}</td>
							</tr>
							<tr className="dash-rows">
								<th>Under consideration</th>
								<td>
									{(modalData as InternshipObjectEntity).UNDER_CONSIDERATION}
								</td>
							</tr>
							<tr className="dash-rows">
								<th>Recruitment interview</th>
								<td>
									{(modalData as InternshipObjectEntity).RECRUITER_INTERVIEW}
								</td>
							</tr>
							<tr className="dash-rows">
								<th>Recruitment interview feedback</th>
								<td>
									{
										(modalData as InternshipObjectEntity)
											.RECRUITER_INTERVIEW_FEEDBACK
									}
								</td>
							</tr>
							<tr className="dash-rows">
								<th>Recruitment interview passed</th>
								<td>
									{
										(modalData as InternshipObjectEntity)
											.RECRUITER_INTERVIEW_PASSED
									}
								</td>
							</tr>
							<tr className="dash-rows">
								<th>Technical specialist interview</th>
								<td>
									{
										(modalData as InternshipObjectEntity)
											.TECHNICAL_SPECIALIST_INTERVIEW_PASSED
									}
								</td>
							</tr>
							<tr className="dash-rows">
								<th>Technical specialistInterv passed</th>
								<td>
									{
										(modalData as InternshipObjectEntity)
											.TECHNICAL_SPECIALIST_INTERVIEW_PASSED
									}
								</td>
							</tr>
							<tr className="dash-rows">
								<th>Refused</th>
								<td>{(modalData as InternshipObjectEntity).REFUSED}</td>
							</tr>
							<tr className="dash-rows">
								<th>Awaiting</th>
								<td>{(modalData as InternshipObjectEntity).AWAITING}</td>
							</tr>
							<tr className="dash-rows">
								<th>Rejected</th>
								<td>{(modalData as InternshipObjectEntity).REJECTED}</td>
							</tr>
							<tr className="dash-rows">
								<th>Accepted</th>
								<td>{(modalData as InternshipObjectEntity).ACCEPTED}</td>
							</tr>
						</table>
					</div>
				</div>
			</DetailedCourseInfoWrapper>
		</React.Fragment>
	);
};

export default DetailedCourseInfo;
