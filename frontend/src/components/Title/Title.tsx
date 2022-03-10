import React from 'react';

import './Title.css';
import { ITitle } from '../../interfaces';

const Title = ({ title }: ITitle): JSX.Element => {
	return (
		<h1 className="title">{ title }</h1>
	);
};

export default Title;
