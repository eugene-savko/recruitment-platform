interface ISpecialityOption {
	id: string | number;
	name: string;
}
interface IStatusOption {
	id: string | number;
	status: string;
}
interface IInternshipOption {
	id: string | number;
	name: string;
}
interface IRowPerPageOption {
	id: string | number;
	name: string;
}
export type {
	IStatusOption,
	ISpecialityOption,
	IInternshipOption,
	IRowPerPageOption,
};
