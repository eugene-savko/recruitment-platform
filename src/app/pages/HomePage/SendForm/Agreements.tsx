import React from 'react';

import { Label, Input } from './components/index';

export const Agreements: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<p>
				<Label>
					<Input type="checkbox" />
					<span>
						Подавая заявку на эту должность, я отправляю свои личные данные в
						Exadel и даю согласие на обработку личных данных с целью приема на
						работу.
					</span>
				</Label>
			</p>
		</React.Fragment>
	);
};
