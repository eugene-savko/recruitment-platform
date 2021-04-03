import React from 'react';

import { Button } from './components/ButtonSubmit';

export function ButtonSubmit() {
	return (
		<Button type="submit" variant="contained" disableRipple disableElevation>
			Submit
		</Button>
	);
}
