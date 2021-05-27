type internshipRequestStatus =
	| 'UNDER_CONSIDERATION'
	| 'RECRUITER_INTERVIEW'
	| 'RECRUITER_INTERVIEW_FEEDBACK'
	| 'TECHNICAL_SPECIALIST_INTERVIEW'
	| 'RECRUITER_INTERVIEW_PASSED'
	| 'TECHNICAL_SPECIALIST_INTERVIEW_PASSED'
	| 'REFUSED'
	| 'ACCEPTED'
	| 'REJECTED'
	| 'AWAITING';

export type InternshipStatus =
	| 'RECRUITMENT_IN_PROCESS'
	| 'RECRUITMENT_IS_OVER'
	| 'INTERNSHIP_STARTED'
	| 'NO_RECRUITMENT';

export const onProcessingStatuses = [
	'UNDER_CONSIDERATION',
	'RECRUITER_INTERVIEW',
	'RECRUITER_INTERVIEW_FEEDBACK',
	'RECRUITER_INTERVIEW_PASSED',
	'TECHNICAL_SPECIALIST_INTERVIEW',
	'TECHNICAL_SPECIALIST_INTERVIEW_PASSED',
	'REFUSED',
	'AWAITING',
];

type CourseStatusMapType = {
	[key in InternshipStatus]: string;
};

export const CourseStatusMap: CourseStatusMapType = {
	RECRUITMENT_IN_PROCESS: 'in progress',
	RECRUITMENT_IS_OVER: 'overdue',
	INTERNSHIP_STARTED: 'new',
	NO_RECRUITMENT: 'resolve',
};

export type InternshipsObjectKeys =
	| 'status'
	| 'registered'
	| 'admitted'
	| 'onProcessing'
	| 'details'
	| 'deadLine';

export interface InternshipObjectEntity {
	name?: string;
	status: InternshipStatus;
	registered: number;
	admitted: number;
	onProcessing: number;
	deadLine: string;
	UNDER_CONSIDERATION: number;
	RECRUITER_INTERVIEW: number;
	RECRUITER_INTERVIEW_FEEDBACK: number;
	TECHNICAL_SPECIALIST_INTERVIEW: number;
	RECRUITER_INTERVIEW_PASSED: number;
	TECHNICAL_SPECIALIST_INTERVIEW_PASSED: number;
	REFUSED: number;
	ACCEPTED: number;
	REJECTED: number;
	AWAITING: number;
}

export interface InternshipsObject {
	[key: string]: InternshipObjectEntity;
}
export interface Internship {
	name: string;
	count: number;
	deadLine: number;
	internshipStatus: InternshipStatus;
	internshipRequestStatus: internshipRequestStatus;
}
