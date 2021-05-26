interface IAddedAppointment {
	title?: string;
	allDay?: boolean;
	endDate: Date | number;
	recruiterId?: number;
	members?: number;
	startDate: Date | number;
}
export default IAddedAppointment;
