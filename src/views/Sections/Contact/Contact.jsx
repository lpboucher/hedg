import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Form, Button } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Image from "components/Image";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col>
          <Form className="w-75">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>First name & Last Name</Form.Label>
              <Form.Control placeholder="Your name" className="bg-transparent border-primary border-top-0 border-left-0 border-right-0 rounded-0" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control placeholder="name@example.com" className="bg-transparent border-primary border-top-0 border-left-0 border-right-0 rounded-0" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" className="bg-transparent border-primary border-top-0 border-left-0 border-right-0 rounded-0" />
            </Form.Group>
          </Form>
          <Button size="xl" variant="secondary" className="btn-rounded">Submit</Button>
        </Col>
        <Col className="text-center">
          <Image className="image" fileName="header-bg.jpg" />
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
