import React from 'react';

// style
import ImageCross from './ImageCross';

// image
import Cross from '../assets/cross.png';

interface ICloseCrossProps {
	close: () => void;
}

const CloseCross: React.FunctionComponent<ICloseCrossProps> = ({ close }) => {
	return <ImageCross src={Cross} alt="Close" onClick={close} />;
};

export default CloseCross;
