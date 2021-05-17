import React from 'react';

// style
import ImageArrow from './ImageArrow';

interface IArrowBackProps {
	close?: () => void;
}

const ArrowBack: React.FunctionComponent<IArrowBackProps> = ({ close }) => {
	return <ImageArrow onClick={close} />;
};

export default ArrowBack;
