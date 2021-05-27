export type InternshipsObjectKeys =
	| 'deadLine'
	| 'registered'
	| 'underConsideration'
	| 'recruitmentInterview'
	| 'recruitmentInterviewFeedback'
	| 'recruitmentInterviewPassed'
	| 'techSpecialistInterview'
	| 'techSpecialistIntervPassed'
	| 'refused'
	| 'accepted'
	| 'rejected'
	| 'awaiting';

export interface InternshipObjectEntityIDK {
	name?: string;
	deadLine: string;
	registered: number;
	underConsideration: number;
	recruitmentInterview: number;
	recruitmentInterviewFeedback: number;
	recruitmentInterviewPassed: number;
	techSpecialistInterview: number;
	techSpecialistIntervPassed: number;
	refused: number;
	accepted: number;
	rejected: number;
	awaiting: number;
}
