import React, { useEffect } from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ModalStyled, ModalInfo, CloseModal } from './components';
import { IModal } from '../types';
import { IconEmail } from '../IconEmail';

export const Modal: React.FunctionComponent<IModal> = ({
	showModal,
	handleModal,
	emailTrainee,
}) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = (status: boolean) => {
		setOpen(status);
	};

	useEffect(() => {
		handleOpen(showModal);
	}, [showModal]);

	return (
		<ModalStyled
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={showModal}
			onClose={() => {
				handleModal(false);
			}}
			closeAfterTransition
			disablePortal
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 200,
			}}
		>
			<Fade in={open}>
				<ModalInfo>
					<CloseModal
						onClick={() => {
							handleModal(false);
						}}
					/>
					<h2 id="transition-modal-title">
						Thank you for submitting your application!
					</h2>
					<p id="transition-modal-description">
						Your application has been sent! Please wait for a response to the
						e-mail:
					</p>
					<p className="email" id="transition-modal-description">
						{emailTrainee}
					</p>
					<IconEmail />
				</ModalInfo>
			</Fade>
		</ModalStyled>
	);
};
