import { IdataInternshipList } from 'app/components/Filter/types';

export interface IFilterContext {
	specialization: string;
	destination: string;
	internshipList: Array<IdataInternshipList>;
}
