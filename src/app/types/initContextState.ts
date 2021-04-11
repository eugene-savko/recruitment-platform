import React from 'react';

import IDefaultContextState from './IDefaultContextState';

interface InitContextState {
	dataFromServer: IDefaultContextState;
	setDataFromServer?: React.Dispatch<
		React.SetStateAction<IDefaultContextState>
	>;
}

export default InitContextState;
