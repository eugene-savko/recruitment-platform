interface IAddedAppointment {
	allDay: boolean;
	endDate: Date | number;
	members: number;
	startDate: Date | number;
	title: string;
}
export default IAddedAppointment;
