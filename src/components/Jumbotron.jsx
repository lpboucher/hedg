import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Jumbotron, Container, Row, Col, Card } from "react-bootstrap";
import Image from "components/Image";
import "./ImageCard.scss";

const Jumbo = ({ className, imageFileName, imageAlt, header, subheader, extraInfo }) => {
  return (
    <Jumbotron fluid className="bg-light">
      <Container fluid>
        <Row className="align-items-center">
          <Col className="p-5">
            <h1>{header}</h1>
            <p>
              {subheader}
            </p>
            {extraInfo}
          </Col>
          <Col className="p-5">
            <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

Jumbo.propTypes = {
  className: PropTypes.string,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

Jumbo.defaultProps = {
  className: null,
  imageFileName: null,
  imageAlt: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default Jumbo;
