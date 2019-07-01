import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

function SetHead({ title }) {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </Fragment>
  );
}

export default SetHead;
