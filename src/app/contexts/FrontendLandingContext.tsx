import { createContext } from 'react';

export interface IFrontendLandingContext {
	internshipValue: number;
	setInternshipValue?: React.Dispatch<React.SetStateAction<number>>;
}
export const FrontendLandingContext = createContext<IFrontendLandingContext>({
	internshipValue: 1,
});
