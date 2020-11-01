/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";

import { Row, Col, Form, Button } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Image from "components/Image";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const Contact = ({ className, frontmatter }) => {
  const [state, setState] = useState({});
  if (!frontmatter) {
    return null;
  }

  const handleChange = e => {
    e.persist();
    setState(existingState => ({ ...existingState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  const { anchorId, header, subheader, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchorId}>
      <Row>
        <SectionHeader header={header} subheader={subheader} />
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col>
          <div>
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="sr-only">
                <label>
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </div>
              <div className="form-group border-bottom my-5">
                <label className="name-input" htmlFor="name-input">First Name & Last Name:</label>
                <input onChange={handleChange} type="text" name="name" className="form-control bg-transparent border-0" id="name-input" />
              </div>
              <div className="form-group border-bottom my-5">
                <label className="phone-input" htmlFor="phone-input">Phone number:</label>
                <input onChange={handleChange} type="text" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control bg-transparent border-0" id="phone-input" />
              </div>
              <div className="form-group border-bottom my-5">
                <label className="email-input" htmlFor="email-input">Email address:</label>
                <input onChange={handleChange} type="email" name="email" className="form-control bg-transparent border-0" id="email-input" />
              </div>
              <Button size="xl" variant="secondary" className="btn-rounded">Submit</Button>
            </form>
          </div>
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
