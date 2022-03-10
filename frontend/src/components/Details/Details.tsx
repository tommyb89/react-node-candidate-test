import React from 'react';

import { IDetails } from '../../interfaces';

import './Details.css';

const getSalaryString = (salary: number): string => {
	const formatter = new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'GBP',
	});
	return formatter.format(salary).replace('.00', '');
};

const Details = ({ salary, type, location, company }: IDetails): JSX.Element => {
	const salaryString = getSalaryString(salary);
	return (
		<div className="details">
			<div>{location}</div>
			<div>{salaryString}</div>
			<div>{type}</div>
			<div>{company}</div>
		</div>
	);
};

export default Details;
