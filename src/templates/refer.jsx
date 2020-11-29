import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Footer from "views/Footer";
import SEO from "components/SEO";
import LanguageSelector from "components/LanguageSelector";
import Image from "components/Image";
import ZohoForm from "components/ZohoForm";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";

import "../style/main.scss";

const iframeSRC = "https://insurancecrmcanada.zohoplatform.com/crm/WebFormServeServlet?rid=1f76f2aed5ba4fcb9d24a9bf427b4c849bcd05a5966f1e75f24147cbb04d147bgid38ba8f6255d2c5eebbda5a355596913ad288491f48f84f5c2b25518a3aba30da";

export const query = graphql`
  query ReferQuery($langKey: String!) {
    site {
      siteMetadata {
        keywords
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { order: ASC, fields: [fields___directoryName, fields___fileName] }
    ) {
      nodes {
        frontmatter {
          address
          anchor
          anchorId
          brandLogo
          brandName
          content
          copyright
          explainer
          header
          imageFileName
          inNavbar
          inFooter
          jumpToAnchor
          jumpToAnchorText
          menuText
          partners {
            logo
            name
          }
          phone
          services {
            content
            header
            iconName
            imageFileName
          }
          slogan
          social {
            facebook
            github
            linkedin
            medium
            twitter
          }
          steps {
            title
            content
          }
          subheader
          testimonials {
            content
          }
          title
        }
        fields {
          fileName
          directoryName
        }
      }
    }
  }
`;

const ReferPage = ({ data, pathContext: { langKey, defaultLang, langTextMap } }) => {
  const {
    site: {
      siteMetadata: { keywords, description },
    },
    allMarkdownRemark: { nodes },
  } = data;

  const location = "/refer";

  const { navBarNode, footerNode, referNode, navAnchors, footAnchors } = breakDownAllNodes(nodes);

  const { header, subheader, imageFileName } = referNode.frontmatter;

  let langSelectorPart;
  if (langTextMap != null && Object.keys(langTextMap).length > 1) {
    langSelectorPart = (
      <>
        <LanguageSelector langKey={langKey} defaultLang={defaultLang} langTextMap={langTextMap} />
      </>
    );
  }

  return (
    <>
      <SEO lang={langKey} title="Top" keywords={keywords} description={description} />
      <Navbar
        anchors={navAnchors}
        frontmatter={navBarNode.frontmatter}
        extraItems={langSelectorPart}
        location={location}
      />
      <Jumbotron fluid className="px-3 mb-0 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col className="text-center custom-spaced">
              <Image className="image" fileName={imageFileName} alt={header || subheader} />
            </Col>
            <Col className="py-5 px-0 justify-content-around">
              {// <ZohoForm />
              }
              <iframe
                title="zohoForm"
                width="100%"
                height="1190px"
                src={iframeSRC}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Footer anchors={footAnchors} frontmatter={footerNode.frontmatter} location={location} />
    </>
  );
};

ReferPage.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object,
};

ReferPage.defaultProps = {
  pathContext: {
    langKey: "en",
    defaultLang: "en",
    langTextMap: {},
  },
};

export default ReferPage;
