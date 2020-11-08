import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Navbar from "views/Navbar";
import Footer from "views/Footer";
import SEO from "components/SEO";
import LanguageSelector from "components/LanguageSelector";
import ScrollToButton from "components/ScrollToButton";
import Image from "components/Image";

import { Jumbotron, Container, Row, Col } from "react-bootstrap";

import "utils/fixFontAwesome";
import breakDownAllNodes from "utils/breakDownAllNodes";

import "../style/main.scss";

/**
 * get file name list from content/sections folder
 */
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

  const { header, subheader, imageFileName, jumpToAnchor, jumpToAnchorText } = referNode.frontmatter;

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
            <Col className="text-center py-5">
              <Image className="image" fileName={imageFileName} alt={header || subheader} />
            </Col>
            <Col className="py-5 px-0 justify-content-around">
              <h1 className="pb-5 font-weight-bold text-primary">{header}</h1>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Footer anchors={footAnchors} frontmatter={footerNode.frontmatter} />
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