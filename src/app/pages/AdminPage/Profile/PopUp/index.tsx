import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// style
import { PopUpWindow, Content } from './components';

interface IModalProps {
	isShow: boolean;
}

const PopUp: React.FunctionComponent<IModalProps> = ({ isShow }) => {
	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isShow]);

	const modal = (
		<React.Fragment>
			<PopUpWindow aria-modal role="dialog">
				<Content>Thank you, your feedback is very important to us!</Content>
			</PopUpWindow>
		</React.Fragment>
	);

	return isShow ? ReactDOM.createPortal(modal, document.body) : null;
};

export default PopUp;
