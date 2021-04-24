import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseCross } from '../../components';

import {
	Wrapper,
	Header,
	StyledModal,
	HeaderText,
	Content,
	Backdrop,
} from './components';

// image
import Cross from '../../assets/cross.png';

interface IModalProps {
	isShow: boolean;
	hide: () => void;
	modalContent?: string;
	headerText?: string;
}

export const MoreInfoModal: React.FunctionComponent<IModalProps> = ({
	isShow,
	hide,
	modalContent,
	headerText,
}) => {
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.keyCode === 27 && isShow) {
			hide();
		}
	};

	useEffect(() => {
		if (isShow) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		document.addEventListener('keydown', onKeyDown, false);
		return () => {
			document.removeEventListener('keydown', onKeyDown, false);
		};
	}, [isShow]);

	const modal = (
		<React.Fragment>
			<Backdrop onClick={hide} />

			<Wrapper
				aria-modal
				aria-labelledby={headerText}
				tabIndex={-1}
				role="dialog"
			>
				<StyledModal>
					<Header>
						<HeaderText>{headerText}</HeaderText>
						<CloseCross src={Cross} onClick={hide} />
					</Header>
					<Content>{modalContent}</Content>
				</StyledModal>
			</Wrapper>
		</React.Fragment>
	);

	return isShow ? ReactDOM.createPortal(modal, document.body) : null;
};
