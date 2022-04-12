import React from "react";

import "./Card.css";

import {
  Button,
  CompanyLogo,
  Description,
  Details,
  Title,
} from "../../components";
import { IJobCard } from "../../interfaces";

export const Card = (props: IJobCard): JSX.Element => {
  return (
    <article className="job-card" key={props.id}>
      <Title title={props.title} />
      <CompanyLogo {...props} />
      <Details {...props} />
      <Description {...props} />

      <Button />
    </article>
  );
};
