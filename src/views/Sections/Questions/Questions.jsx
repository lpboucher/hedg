import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Process = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <Col className="text-center">
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          <Button size="xl" variant="warning">test</Button>
        </Col>
      </Row>
    </PageSection>
  );
};

Process.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Process.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Process;
