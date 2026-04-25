"use client";
import React from "react";
import styles from "../faqs/faqs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import parse from "html-react-parser";

const Faqs = ({data}) => {

  return (
    <>
      <section className={`${styles.faqSection} faqSection pt-100  pb-100`} id="faqs">
        <Container className={styles.accordianContainer}>
          <h2 className={`${styles.headingTop}`}>
             {data?.HomePage?.frequently_ask_questions}
          </h2>
          <Accordion defaultActiveKey="0" className={styles.accordianCustom}>
            <Accordion.Item eventKey="1">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>{parse(data?.HomePage?.question_one)}</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                {data?.HomePage?.answer_one}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>  {parse(data?.HomePage?.question_two)}</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                 {data?.HomePage?.answer_two}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>  {parse(data?.HomePage?.question_three)}</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                  {data?.HomePage?.answer_three}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>  {parse(data?.HomePage?.question_four)}</p>
              </Accordion.Header>
              <Accordion.Body className={styles.accordianCustomBody}>
                  {data?.HomePage?.answer_four}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header className={styles.accordianCustomHeader}>
                <p  className={styles.accordionTitle}>  {parse(data?.HomePage?.question_five)}</p>
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
