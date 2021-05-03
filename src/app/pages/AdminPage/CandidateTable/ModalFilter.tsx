import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { Backdrop, ModalWrapper } from './components';

export interface IModalFilterProps {
	isShown: boolean;
}
export const ModalFilter: React.FunctionComponent<IModalFilterProps> = ({
	children,
	isShown,
}) => {
	useEffect(() => {
		const stopScroll = (show: boolean) => {
			if (show) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'unset';
			}
		};
		stopScroll(isShown);
	}, [isShown]);
	const modal = (
		<React.Fragment>
			<Backdrop />
			<ModalWrapper>{children}</ModalWrapper>
		</React.Fragment>
	);
	return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
