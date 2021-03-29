import React from 'react';

import { Input } from './InputText';

import { WrapperForTowColomn } from './component/WrapperForTowColomn';

export const WrapperForInputName: React.FunctionComponent = () => (
	<>
		<WrapperForTowColomn>
			<div>
				<Input />
				<Input />
				<Input />
			</div>
			<div>
				<Input />
				<Input />
				<Input />
			</div>
		</WrapperForTowColomn>
	</>
);
