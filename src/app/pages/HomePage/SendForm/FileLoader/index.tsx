import React from 'react';

import { Close as CloseIcon } from '@material-ui/icons';

import { Input } from '../components';

import { SelectedFile, Wrapper } from './components';

import { AttachButton } from './AttachButton';

export const FileLoader: React.FunctionComponent = () => {
	return (
		<Wrapper>
			<label htmlFor="attach-file">
				<AttachButton />
				<Input type="file" id="attach-file" />
			</label>

			<SelectedFile>
				file.doc
				<CloseIcon />
			</SelectedFile>
		</Wrapper>
	);
};
