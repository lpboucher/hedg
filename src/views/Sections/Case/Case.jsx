import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Image from "components/Image";

const Case = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, content, imageFileName } = frontmatter;

  let imagePart;
  if (imageFileName) {
    imagePart = <Image fileName={imageFileName} />;
  }

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        <Col>
          {imagePart}
        </Col>
        <Col>
          <p className="text-muted">{content}</p>
        </Col>
      </Row>
    </PageSection>
  );
};

Case.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Case.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Case;
