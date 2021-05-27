import {
	InternshipsObject,
	Internship,
	CourseStatusMap,
	InternshipStatus,
	onProcessingStatuses,
} from './types/internshipTypes';

const createCourseEntity = (course: Internship) => {
	return {
		status: CourseStatusMap[course.internshipStatus] as InternshipStatus,
		registered: course.count,
		admitted: course.internshipRequestStatus === 'ACCEPTED' ? course.count : 0,
		onProcessing: onProcessingStatuses.includes(course.internshipRequestStatus)
			? course.count
			: 0,
		deadLine: new Date(course.deadLine).toLocaleDateString(),
		[course.internshipRequestStatus]: course.internshipRequestStatus,
		UNDER_CONSIDERATION:
			course.internshipRequestStatus === 'UNDER_CONSIDERATION'
				? course.count
				: 0,
		RECRUITER_INTERVIEW:
			course.internshipRequestStatus === 'RECRUITER_INTERVIEW'
				? course.count
				: 0,
		RECRUITER_INTERVIEW_FEEDBACK:
			course.internshipRequestStatus === 'RECRUITER_INTERVIEW_FEEDBACK'
				? course.count
				: 0,
		TECHNICAL_SPECIALIST_INTERVIEW:
			course.internshipRequestStatus === 'TECHNICAL_SPECIALIST_INTERVIEW'
				? course.count
				: 0,
		RECRUITER_INTERVIEW_PASSED:
			course.internshipRequestStatus === 'RECRUITER_INTERVIEW_PASSED'
				? course.count
				: 0,
		TECHNICAL_SPECIALIST_INTERVIEW_PASSED:
			course.internshipRequestStatus === 'TECHNICAL_SPECIALIST_INTERVIEW_PASSED'
				? course.count
				: 0,
		REFUSED: course.internshipRequestStatus === 'REFUSED' ? course.count : 0,
		ACCEPTED: course.internshipRequestStatus === 'ACCEPTED' ? course.count : 0,
		REJECTED: course.internshipRequestStatus === 'REJECTED' ? course.count : 0,
		AWAITING: course.internshipRequestStatus === 'AWAITING' ? course.count : 0,
	};
};

export const mapInternships = (courses: Internship[]): InternshipsObject => {
	return courses.reduce((acc: InternshipsObject, course) => {
		const isCourseInTheList =
			acc[course.name] || acc[course.name]?.status === course.internshipStatus;

		if (isCourseInTheList) {
			acc[course.name].registered += course.count;
			acc[course.name].onProcessing += onProcessingStatuses.includes(
				course.internshipRequestStatus
			)
				? course.count
				: 0;
			acc[course.name].admitted +=
				course.internshipRequestStatus === 'ACCEPTED' ? course.count : 0;
			acc[course.name].UNDER_CONSIDERATION +=
				course.internshipRequestStatus === 'UNDER_CONSIDERATION'
					? course.count
					: 0;
			acc[course.name].RECRUITER_INTERVIEW +=
				course.internshipRequestStatus === 'RECRUITER_INTERVIEW'
					? course.count
					: 0;
			acc[course.name].RECRUITER_INTERVIEW_FEEDBACK +=
				course.internshipRequestStatus === 'RECRUITER_INTERVIEW_FEEDBACK'
					? course.count
					: 0;
			acc[course.name].TECHNICAL_SPECIALIST_INTERVIEW +=
				course.internshipRequestStatus === 'TECHNICAL_SPECIALIST_INTERVIEW'
					? course.count
					: 0;
			acc[course.name].RECRUITER_INTERVIEW_PASSED +=
				course.internshipRequestStatus === 'RECRUITER_INTERVIEW_PASSED'
					? course.count
					: 0;
			acc[course.name].TECHNICAL_SPECIALIST_INTERVIEW_PASSED +=
				course.internshipRequestStatus ===
				'TECHNICAL_SPECIALIST_INTERVIEW_PASSED'
					? course.count
					: 0;
			acc[course.name].REFUSED +=
				course.internshipRequestStatus === 'REFUSED' ? course.count : 0;
			acc[course.name].ACCEPTED +=
				course.internshipRequestStatus === 'ACCEPTED' ? course.count : 0;
			acc[course.name].REJECTED +=
				course.internshipRequestStatus === 'REJECTED' ? course.count : 0;
			acc[course.name].AWAITING +=
				course.internshipRequestStatus === 'AWAITING' ? course.count : 0;
		} else {
			acc[course.name] = createCourseEntity(course);
		}

		return acc;
	}, {});
};
