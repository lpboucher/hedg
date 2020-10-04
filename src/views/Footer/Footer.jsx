import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Nav } from "react-bootstrap";
import NavItem from "components/NavItem";

const Footer = ({ anchors, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    slogan,
    address,
    phone,
    copyright,
  } = frontmatter;

  return (
    <footer className="bg-primary text-white footer py-5">
      <Container>
        <Row className="align-items-center text-center">
          <Col className="d-flex flex-column justify-content-between text-lg-left">
            <div>
              <h3>Hedg.</h3>
              <p>{slogan}</p>
            </div>
            <div>
              <p>{address}</p>
              <p>{phone}</p>
            </div>
          </Col>
          <Col className="my-3 my-lg-0">
            <Nav className="text-uppercase ml-auto">
              {anchors.map(({ anchor, id }) => (
                <NavItem key={id} to={id}>{anchor}</NavItem>
              ))}
            </Nav>
            <p>{copyright}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.string),
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  anchors: [],
  frontmatter: null,
};

export default Footer;
