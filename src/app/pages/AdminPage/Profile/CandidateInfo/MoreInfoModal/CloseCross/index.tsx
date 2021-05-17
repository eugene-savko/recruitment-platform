import React from 'react';

// image
import Cross from 'app/assets/img/Profile/cross.png';

// style
import ImageCross from './CloseCross';

interface ICloseCrossProps {
	close: () => void;
}

const CloseCross: React.FunctionComponent<ICloseCrossProps> = ({ close }) => {
	return <ImageCross src={Cross} alt="Close" onClick={close} />;
};

export default CloseCross;
