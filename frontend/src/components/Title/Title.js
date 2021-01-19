import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';


export const Title = ({ title }) => {
	return (
		<h1 className="title">{ title }</h1>
	);
};

Title.propTypes = {
	title: PropTypes.string,
};
