import { AppointmentModel } from '@devexpress/dx-react-scheduler';

export const schedulerData: Array<AppointmentModel> = [
	{
		title: 'Website Re-Design Plan',
		startDate: new Date(2021, 5, 25, 10, 0),
		endDate: new Date(2021, 5, 25, 10, 30),
		id: 0,
		members: [1],
	},
	{
		title: 'Website Re-Design Plan',
		startDate: new Date(2021, 5, 25, 10, 30),
		endDate: new Date(2021, 5, 25, 11, 0),
		id: 1,
		members: [1],
	},

	{
		title: 'Book Flights to San Fran for Sales Trip',
		startDate: new Date(2021, 5, 25, 12, 30),
		endDate: new Date(2021, 5, 25, 13, 0),
		id: 2,
		members: [2],
	},
	{
		title: 'Book Flights to San Fran for Sales Trip',
		startDate: new Date(2021, 5, 25, 13, 0),
		endDate: new Date(2021, 5, 25, 13, 30),
		id: 3,
		members: [2],
	},
	{
		title: 'Book Flights to San Fran for Sales Trip',
		startDate: new Date(2021, 5, 25, 13, 30),
		endDate: new Date(2021, 5, 25, 14, 0),
		id: 4,
		members: [3],
	},
];
