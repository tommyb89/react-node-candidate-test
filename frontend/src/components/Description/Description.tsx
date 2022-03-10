import React from 'react';

import { IDescription } from '../../interfaces';

import './Description.css';

const Description = ({ description }: IDescription): JSX.Element => {
  return (
    <p className="description">{description}</p>
  );
};

export default Description;
