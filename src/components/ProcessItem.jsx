import React from "react";
import PropTypes from "prop-types";

import "./ProcessItem.scss";

const ProcessItem = ({ title, content, stepNumber }) => {
  return (
    <>
      <h1 className="bg-white text-center mx-5">{stepNumber}</h1>
      <h3 className="text-center">{title}</h3>
      <p className="text-center">{content}</p>
    </>
  );
};

ProcessItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  stepNumber: PropTypes.number,
};

ProcessItem.defaultProps = {
  stepNumber: 1,
};

export default ProcessItem;
