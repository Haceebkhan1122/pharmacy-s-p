"use client";

import React from "react";
import styles from "./citations.module.scss";
import { Container } from "react-bootstrap";
import parse from "html-react-parser";
import "bootstrap/dist/css/bootstrap.min.css";

const CitationsProven = ({ widgetData }) => {
  return (
    <section className={styles.citationsection}>
      <Container className={styles.citationsContainer}>
        <h3 className={styles.headingTop}>References</h3>

        <div className={styles.citationBox}>
          <div className={styles.citationInner}>
            {widgetData && parse(widgetData?.description)}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CitationsProven;