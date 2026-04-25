"use client";
import React from "react";
import styles from "../faqs/faqs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

const Faqs = ({data}) => {

  return (
    <>
      <section className={`${styles.faqSection} faqSection pt-100  pb-100`} id="faqs">
        <Container className={styles.accordianContainer}>
          <h2 className={`${styles.headingTop}`}>
             Everything you need to know
          </h2>
          <Accordion defaultActiveKey="0" className={styles.accordianCustom}>
            <Accordion.Item eventKey="1">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>Which patient profiles are most suitable for once-weekly injectable semaglutide?</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                {data?.HomePage?.answer_one}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>How does GLP-1 receptor activation translate into sustained glycaemic control with SEM-P?</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                 {data?.HomePage?.answer_two}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}> What are the key administration considerations when using pre-filled pens versus vial presentations?</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                  {data?.HomePage?.answer_three}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>How should SEM-P be positioned in combination therapy with other anti-diabetic agents?</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                  {data?.HomePage?.answer_four}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}> What are the common tolerability considerations during treatment initiation and dose escalation?</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                  {data?.HomePage?.answer_five}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
}

export default Faqs;
