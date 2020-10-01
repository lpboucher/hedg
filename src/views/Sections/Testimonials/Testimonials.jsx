import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Carousel } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
// import TestimonialItem from "components/TestimonialItem";

const Testimonials = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, testimonials } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Carousel>
        {testimonials.map((testimonial) => (
          <Carousel.Item key={testimonial.content.slice(0, 10)}>
            <div style={{ height: "100px" }} className="bg-primary" />
            <Carousel.Caption>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ultrices ac dolor nec vestibulum.{" "}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </PageSection>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Testimonials.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Testimonials;
