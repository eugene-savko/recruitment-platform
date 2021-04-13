import React from 'react';

import { Note } from '../components';

import { AttachButtonWrapper, Button } from './components';

export const AttachButton: React.FunctionComponent = () => {
	return (
		<AttachButtonWrapper>
			<Button>Upload file *</Button>
			<Note>(Maximum file size 5MB; pdf, doc, docx)</Note>
		</AttachButtonWrapper>
	);
};
