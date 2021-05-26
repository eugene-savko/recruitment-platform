import React, { createContext, useState, useMemo } from 'react';

export interface IFrontendLandingContext {
	internshipValue: number;
	setInternshipValue?: React.Dispatch<React.SetStateAction<number>>;
}
export const FrontendLandingContext = createContext<IFrontendLandingContext>({
	internshipValue: 0,
});

export const FrontendLandingContextProvider: React.FunctionComponent<React.ReactNode> = ({
	children,
}) => {
	const [internshipValue, setInternshipValue] = useState(1);
	const memoizedInternshipValue = useMemo(
		() => ({ internshipValue, setInternshipValue }),
		[internshipValue]
	);
	return (
		<FrontendLandingContext.Provider value={memoizedInternshipValue}>
			{children}
		</FrontendLandingContext.Provider>
	);
};
