import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Nav } from "react-bootstrap";
import NavItem from "components/NavItem";
import Image from "components/Image";

import "./Footer.scss";

const Footer = ({ anchors, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    brandLogo,
    brandName,
    slogan,
    address,
    phone,
    copyright,
  } = frontmatter;

  return (
    <footer className="bg-primary text-white footer py-5">
      <Container>
        <Row className="text-center">
          <Col className="d-flex flex-column justify-content-between text-lg-left">
            <div>
              <Image className="light-logo" fileName={brandLogo} alt={brandName} />
              <p className="small">{slogan}</p>
            </div>
            <div>
              <p className="mb-0 mid-font">{address}</p>
              <p className="mb-0 mid-font">{phone}</p>
            </div>
            <p className="mt-3 small">{copyright}</p>
          </Col>
          <Col className="col-5 my-3 my-lg-0">
            <Nav className="footer-link text-uppercase ml-auto">
              {anchors.map(({ anchor, id }) => (
                <NavItem key={id} to={id}>{anchor}</NavItem>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  anchors: PropTypes.arrayOf(PropTypes.shape({
    anchor: PropTypes.string,
    id: PropTypes.string,
  })),
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  anchors: [],
  frontmatter: null,
};

export default Footer;
