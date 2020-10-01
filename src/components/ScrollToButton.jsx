import React from "react";
import PropTypes from "prop-types";

import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import { Button } from "react-bootstrap";

const ScrollToButton = ({ jumpToAnchor, jumpToAnchorText, color, size }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scrollToSection = useSmoothScrollTo(jumpToAnchor);

  return (
    <Button size={size} variant={color} color="white" className="text-uppercase text-white btn-rounded" onClick={scrollToSection}>
      {jumpToAnchorText}
    </Button>
  );
};

ScrollToButton.propTypes = {
  jumpToAnchor: PropTypes.string.isRequired,
  jumpToAnchorText: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};

ScrollToButton.defaultProps = {
  color: "success",
  size: "md",
};

export default ScrollToButton;
