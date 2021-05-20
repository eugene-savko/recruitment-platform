import { createContext } from 'react';

export interface IFrontendLandingContext {
	internshipId: number;
	setInternshipId?: React.Dispatch<React.SetStateAction<number>>;
}
export const FrontendLandingContext = createContext<IFrontendLandingContext>({
	internshipId: 1,
});
