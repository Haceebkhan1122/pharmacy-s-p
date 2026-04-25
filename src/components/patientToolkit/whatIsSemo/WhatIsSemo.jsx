import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./whatIsSemo.module.scss";
import Image from "next/image";

// Fallback image agar API se na aaye
import docFallback from "../../../assets/images/png/aunt.png";

const WhatIsSemo = ({ widgetData }) => {
  // API Data Extraction
  const heading = widgetData?.heading || "Know your SEM-P";
  const description = widgetData?.description || "";

  // Data array se image nikalna
  const itemData = widgetData?.data?.[0] || {};
  const sideImage = itemData?.image || docFallback;

  return (
    <section className={styles.WhatIsSemo}>
      <Container>
        <Row>
          {/* Left column - Content */}
          <Col md={6} className={styles.leftCol}>
            <h3 className={styles.title}>
              {heading}
            </h3>

            {/* Description mein <p> aur <br /> tags hain, 
              isliye dangerouslySetInnerHTML best hai taaki formatting barkarar rahe.
            */}
            <div
              className={styles.lead}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Col>

          {/* Right column - Image */}
          <Col md={6} className={styles.rightCol}>
            <div className={styles.imageWrap}>
              {/* External URL ke liye simple img tag ya loader config zaroori hai Next.js mein */}
              <img
                src={sideImage}
                alt={heading}
                className={`${styles.heroImg} img-fluid`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatIsSemo;