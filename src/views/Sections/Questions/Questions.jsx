import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import "./Questions.scss";

const Process = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchorId, header: rootHeader, subheader: rootSubHeader, explainer } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <Col className="questions text-center">
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          <p>{explainer}</p>
          <Button size="xl" variant="warning" className="mt-3 btn-rounded font-weight-bold">Ask your questions</Button>
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
