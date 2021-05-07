interface ISpeciality {
	id: number;
	name: string;
}
interface ICountry {
	id: number;
	name: string;
}
interface ITrainingItem {
	id: number;
	name: string;
	description: string;
	deadline?: number;
	startDate?: number;
	endDate?: number;
	status: string;
	specialities: Array<ISpeciality>;
	countries: Array<ICountry>;
	skills: [];
}
export const INTERNSHIPS_DATA: Array<ITrainingItem> = [
	{
		id: 1,
		name: 'Java & Javascript Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 2,
				name: 'JavaScript',
			},
			{
				id: 1,
				name: 'Java',
			},
		],
		countries: [
			{
				id: 1,
				name: 'Ukraine',
			},
			{
				id: 2,
				name: 'Russia',
			},
		],
		skills: [],
	},
	{
		id: 2,
		name: 'Ruby & Javascript Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 2,
				name: 'JavaScript',
			},
			{
				id: 6,
				name: 'Ruby',
			},
		],
		countries: [
			{
				id: 3,
				name: 'Belarus',
			},
			{
				id: 4,
				name: 'Kazaxstan',
			},
		],
		skills: [],
	},
	{
		id: 3,
		name: 'Backend Java Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 1,
				name: 'Java',
			},
		],
		countries: [
			{
				id: 1,
				name: 'Ukraine',
			},
			{
				id: 2,
				name: 'Russia',
			},
			{
				id: 3,
				name: 'Belarus',
			},
			{
				id: 4,
				name: 'Kazaxstan',
			},
		],
		skills: [],
	},
	{
		id: 4,
		name: 'Backend Ruby Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 6,
				name: 'Ruby',
			},
		],
		countries: [
			{
				id: 1,
				name: 'Ukraine',
			},
			{
				id: 2,
				name: 'Russia',
			},
			{
				id: 3,
				name: 'Belarus',
			},
		],
		skills: [],
	},
	{
		id: 5,
		name: 'Frontend Javascript Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 2,
				name: 'JavaScript',
			},
		],
		countries: [
			{
				id: 3,
				name: 'Belarus',
			},
			{
				id: 4,
				name: 'Kazaxstan',
			},
		],
		skills: [],
	},
	{
		id: 6,
		name: 'Frontend Python Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 5,
				name: 'Python',
			},
		],
		countries: [
			{
				id: 2,
				name: 'Russia',
			},
			{
				id: 3,
				name: 'Belarus',
			},
		],
		skills: [],
	},
	{
		id: 7,
		name: 'Data & Analytics Python Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 5,
				name: 'Python',
			},
		],
		countries: [
			{
				id: 1,
				name: 'Ukraine',
			},
			{
				id: 3,
				name: 'Belarus',
			},
			{
				id: 4,
				name: 'Kazaxstan',
			},
		],
		skills: [],
	},
	{
		id: 8,
		name: 'C++ Developer Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 3,
				name: 'C++',
			},
		],
		countries: [
			{
				id: 1,
				name: 'Ukraine',
			},
		],
		skills: [],
	},
	{
		id: 9,
		name: 'Go Developer Internship',
		description:
			'We’re seeking a Middle Business System Analyst to join our international team! As a Business System Analyst, your main duties will be to synthesize information from many sources, produce recommendations, organize process ...',
		deadline: 1614556800000,
		startDate: 1615334400000,
		endDate: 1617062400000,
		status: 'RECRUITMENT_IN_PROCESS',
		specialities: [
			{
				id: 4,
				name: 'Go',
			},
		],
		countries: [
			{
				id: 2,
				name: 'Russia',
			},
		],
		skills: [],
	},
];
