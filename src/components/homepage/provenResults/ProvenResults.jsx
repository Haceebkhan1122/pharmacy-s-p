'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Image from 'next/image';
import styles from './provenResults.module.scss';
import parse from "html-react-parser";

const ResultsSection = ({ widgetData }) => {
  const [activeTabId, setActiveTabId] = useState(widgetData?.data?.[0]?.card_1_head);

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.heading}>{widgetData?.heading}</h1>
      <Container>
        <Col lg={12}>
          <Row>
            <Col lg={12} className={styles.tabControlCol}>
              <Tabs
                id="proven-results-tabs"
                activeKey={activeTabId}
                onSelect={(k) => setActiveTabId(k)}
                className="customTabsNav"
              >
                {widgetData?.data?.length > 0 &&
                  widgetData.data.map((item, index) => (
                    <Tab
                      key={index}
                      eventKey={item?.card_1_head}
                      title={item?.card_1_head}
                    >
                      <div className={styles.wraperSingleContent}>
                        <Row>
                          <Col lg={6}>
                            <Image
                              src={item?.card_1_icon}
                              alt={item?.card_1_head}
                              width={625}
                              height={565}
                            />
                          </Col>

                          <Col lg={6}>
                            <div className={styles.right_info}>
                              <h2>{item?.heading}</h2>
                              <ul>
                                {item?.sub_head && parse(item?.sub_head)}
                              </ul>
                              <p>{item?.description}</p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                  ))}
              </Tabs>

            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default ResultsSection;
