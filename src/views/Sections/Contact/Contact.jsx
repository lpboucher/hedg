/* eslint-disable jsx-a11y/label-has-associated-control */
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

  const { anchorId, header, subheader, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col>
          {/* <Form className="w-75" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>First name & Last Name</Form.Label>
              <Form.Control className="bg-transparent border-primary border-top-0 border-left-0 border-right-0 rounded-0" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control className="bg-transparent border-primary border-top-0 border-left-0 border-right-0 rounded-0" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" className="bg-transparent border-primary border-top-0 border-left-0 border-right-0 rounded-0" />
            </Form.Group>
  </Form> */}
          <form name="contact" method="POST" data-netlify="true">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" className="form-control" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" rows="10" id="message" name="message" required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <Button size="xl" variant="secondary" className="btn-rounded" type="submit">Submit</Button>
        </Col>
        <Col className="text-center">
          <Image className="image" fileName={imageFileName} />
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
