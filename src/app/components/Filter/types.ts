export interface IFilterState {
	specialization: string;
	destination: string;
}
export interface IdataInternshipList {
	id: string;
	course: string;
	profession: string;
	country: string;
	info: string;
}
export interface IdataSelectedOption {
	destination: Array<{ id: number, country: string }>;
	specialization: Array<{ id: number, profession: string }>;
}

export interface IdataSelectedOptions extends IdataSelectedOption {}
