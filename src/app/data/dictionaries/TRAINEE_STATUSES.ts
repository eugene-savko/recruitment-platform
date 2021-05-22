interface ITraineeStatuses {
	[key: string]: string;
}
export const TRAINEE_STATUSES: ITraineeStatuses = {
	UNDER_CONSIDERATION: 'Pending',
	RECRUITER_INTERVIEW: 'Recruiter Interview',
	TECHNICAL_SPECIALIST_INTERVIEW: 'Technical Interview',
	RECRUITER_INTERVIEW_PASSED: 'Rec. Interview Passed',
	TECHNICAL_SPECIALIST_INTERVIEW_PASSED: 'Tech. Interview Passed',
	REFUSED: 'Refused',
	ACCEPTED: 'Accepted',
	REJECTED: 'Rejected',
	AWAITING: 'Awaiting',
};
