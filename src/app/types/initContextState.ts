import React from 'react';

import IDefaultContextState from './IDefaultContextState';

interface IContextState {
	dataFromServer: IDefaultContextState;
	setDataFromServer?: React.Dispatch<
		React.SetStateAction<IDefaultContextState>
	>;
}

export default IContextState;
