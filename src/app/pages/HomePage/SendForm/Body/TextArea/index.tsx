import React from 'react';

import { TextArea as StyledTextArea, WrapperTextArea } from '../components';
import { ITextArea } from '../../types';

export const TextArea: React.FunctionComponent<ITextArea> = ({ register }) => {
	return (
		<WrapperTextArea>
			<StyledTextArea name="TextArea" ref={register} />
		</WrapperTextArea>
	);
};
