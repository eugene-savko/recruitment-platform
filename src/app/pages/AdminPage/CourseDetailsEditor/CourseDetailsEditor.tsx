import React, { useState } from 'react';
import { RawDraftContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const contentEditorDetails: RawDraftContentState = {
	entityMap: {},
	blocks: [
		{
			key: '637gr',
			text: 'Initialized from content state.',
			type: 'unstyled',
			depth: 0,
			inlineStyleRanges: [],
			entityRanges: [],
			data: {},
		},
	],
};

export const CourseDetailsEditor: React.FC = () => {
	const [state, setState] = useState(contentEditorDetails);

	const onContentStateChange = (contentStat: RawDraftContentState) => {
		setState(contentStat);
	};

	return (
		<div>
			<Editor
				editorStyle={{
					border: '1px solid #F1F1F1',
					background: '#fff',
					padding: '16px',
				}}
				wrapperClassName="wrapper"
				editorClassName="editor"
				onContentStateChange={onContentStateChange}
			/>
			<textarea disabled value={JSON.stringify(state, null, 4)} />
		</div>
	);
};
