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
    setState({ [e.target.name]: e.target.value });
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
            <h1>Contact</h1>
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your name:<br />
                  <input type="text" name="name" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your email:<br />
                  <input type="email" name="email" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message:<br />
                  <textarea name="message" onChange={handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
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
