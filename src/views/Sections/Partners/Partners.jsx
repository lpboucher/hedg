import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Image from "components/Image";

const Partners = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header, partners } = frontmatter;

  return (
    <PageSection className={clsx("py-5", className)} id={anchorId}>
      <Row>
        <SectionHeader header={header} />
      </Row>
      <Row>
        {partners.map(({ name, logo }) => (
          <Col md={3} sm={6} className="my-3" key={logo}>
            <Image fileName={logo} alt={name} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Partners.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Partners;
