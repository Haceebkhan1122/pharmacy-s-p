import React from "react";
import styles from "./citations.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import parse from "html-react-parser";

const CitationsMechanism = ({ widgetData }) => {

  return (
    <div className={`${styles.citation}`}>
      <Container>
        <Row>
          <Col md={12}>
            <h2>{widgetData && parse(widgetData?.heading)}</h2>
            <p>
              {widgetData && parse(widgetData?.description)}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CitationsMechanism;
