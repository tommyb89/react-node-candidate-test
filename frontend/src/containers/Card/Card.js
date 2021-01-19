import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = props => {
	return (
		<div className="job-card">
		</div>
	);
};

Card.propTypes = {
	props: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		salary: PropTypes.string,
		type: PropTypes.string,
		location: PropTypes.string,
		description: PropTypes.string,
		logo: PropTypes.string,
	}),
};
