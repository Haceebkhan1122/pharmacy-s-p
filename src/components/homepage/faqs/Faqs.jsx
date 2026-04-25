"use client";
import React, { useState } from "react";
import styles from "../faqs/faqs.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import parse from "html-react-parser";

const Faqs = ({ widgetData }) => {
  const [activeKeys, setActiveKeys] = useState([widgetData?.data?.[0]?.question]);

  const handleExpandAll = () => {
    const allKeys = widgetData?.data?.map((item) => item.question);
    setActiveKeys(allKeys);
  };

  const handleCollapseAll = () => {
    setActiveKeys([]);
  };

  const handleToggle = (key) => {
    if (activeKeys.includes(key)) {
      setActiveKeys(activeKeys.filter((k) => k !== key));
    } else {
      setActiveKeys([...activeKeys, key]);
    }
  };

  return (
    <>
      <section className={`${styles.faqSection} faqSection pt-100  pb-100`}>
        <Container className={styles.accordianContainer}>
          <h2 className={`${styles.headingTop}`}>
            {widgetData?.heading}
            <div className={styles.btnWrapper}>
              <button onClick={handleExpandAll}> Expand All</button>
              <button onClick={handleCollapseAll}> Collapse All</button>
            </div>
          </h2>
          <Accordion
            activeKey={activeKeys}
            onSelect={setActiveKeys} 
            alwaysOpen 
            defaultActiveKey={widgetData?.data?.[0]?.question} className={styles.accordianCustom}>
            {widgetData?.data?.length > 0 && widgetData?.data?.map((item) => {
              return (
                <Accordion.Item eventKey={item?.question}>
                  <Accordion.Header className={styles.accordianCustomHeader}>
                    <p className={styles.accordionTitle}>{parse(item?.question)}</p>
                  </Accordion.Header>
                  <Accordion.Body className={styles.accordianCustomBody}>
                    {parse(item?.answer)}
                  </Accordion.Body>
                </Accordion.Item>
              )
            })}

          </Accordion>
        </Container>
      </section>
    </>
  );
}

export default Faqs;
