import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, services } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      {services.map((service, index) => (
        <ServiceItem key={service.header} itemIndex={index} {...service} />
      ))}
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
