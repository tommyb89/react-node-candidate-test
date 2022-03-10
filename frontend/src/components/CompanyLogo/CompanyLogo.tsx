import React from 'react';

import { ICompanyLogo } from '../../interfaces';

import './CompanyLogo.css';

const CompanyLogo = ({ company, logo }: ICompanyLogo): JSX.Element => {
  return (
    <div className="company-logo">
      <img src={logo} alt={company} />
    </div>
  );
};

export default CompanyLogo;
