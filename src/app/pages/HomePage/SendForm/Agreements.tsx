import React from 'react';

import { Label, Input, ContentAgreement } from './components';

export const Agreements: React.FunctionComponent = () => {
	return (
		<Label>
			<Input type="checkbox" />
			<ContentAgreement>
				Подавая заявку на эту должность, я отправляю свои личные данные в Exadel
				и даю согласие на обработку личных данных с целью приема на работу.
			</ContentAgreement>
		</Label>
	);
};
