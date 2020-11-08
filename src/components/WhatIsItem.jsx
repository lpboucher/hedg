import React from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";

import "./WhatIsItem.scss";

const WhatIsItem = ({ className, label, step }) => {
  return (
    <Col className="my-5 d-flex flex-column description-col text-center justify-content-between">
      <div className={`flex-grow-1 what-is-${step} what-is-step`} />
      <p className="p-1 mb-2 small text-center">{label}</p>
    </Col>
  );
};

WhatIsItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  step: PropTypes.number,
};

WhatIsItem.defaultProps = {
  className: null,
  step: 1,
};

export default WhatIsItem;
