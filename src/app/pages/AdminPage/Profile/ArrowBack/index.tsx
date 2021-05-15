import React from 'react';

// style
import ImageCross from './ImageCross';

interface IArrowBackProps {
	close?: () => void;
}

const ArrowBack: React.FunctionComponent<IArrowBackProps> = ({ close }) => {
	return <ImageCross onClick={close} />;
};

export default ArrowBack;
