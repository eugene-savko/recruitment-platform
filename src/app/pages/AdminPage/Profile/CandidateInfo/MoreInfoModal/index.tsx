import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// components
import CloseCross from './CloseCross';

// style
import {
	Wrapper,
	Header,
	StyledModal,
	HeaderText,
	Content,
	Backdrop,
} from './components';

interface IModalProps {
	isShow: boolean;
	hide: () => void;
	modalContent?: string;
	headerText?: string;
}

const MoreInfoModal: React.FunctionComponent<IModalProps> = ({
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
						<CloseCross close={hide} />
					</Header>
					<Content>{modalContent}</Content>
				</StyledModal>
			</Wrapper>
		</React.Fragment>
	);
	return isShow ? ReactDOM.createPortal(modal, document.body) : null;
};

export default MoreInfoModal;
