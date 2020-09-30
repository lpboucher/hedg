import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import CircleFAButton from "components/CircleFAButton";
import Image from "components/Image";
import "./ServiceItem.scss";

const ServiceItem = ({ iconName, imageFileName, header, content, itemIndex }) => {
  const textFirst = itemIndex % 2 === 0 ? "first" : "last";

  let iconPart;
  if (iconName) {
    iconPart = <CircleFAButton iconName={iconName} />;
  }

  let imagePart;
  if (imageFileName) {
    imagePart = <Image className="service-item-image" fileName={imageFileName} />;
  }

  return (
    <Row className="text-center">
      <Col md={{ order: textFirst }}>
        {iconPart}
        {imagePart}
      </Col>
      <Col>
        <h4 className="service-item-heading">{header}</h4>
        <p className="text-muted">{content}</p>
      </Col>
    </Row>
  );
};

ServiceItem.propTypes = {
  iconName: PropTypes.string,
  imageFileName: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
  itemIndex: PropTypes.number,
};

ServiceItem.defaultProps = {
  iconName: null,
  imageFileName: null,
  header: "",
  content: "",
  itemIndex: 1,
};

export default ServiceItem;
