export interface IDetails {
  salary: number;
  type: string;
  location: string;
  company: string;
}

export interface ICompanyLogo {
  company: string;
  logo: string;
}

export interface IDescription {
  description: string;
}

export interface ITitle {
  title: string;
}

export interface IJobCard extends ITitle, IDetails, ICompanyLogo, IDescription {
  id: string;
}
