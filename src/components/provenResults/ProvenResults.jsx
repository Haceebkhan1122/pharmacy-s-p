'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Image from 'next/image';
import styles from './provenResults.module.scss';
import parse from "html-react-parser";


const ResultsSection = ({ resultsData }) => {
  const [activeTabId, setActiveTabId] = useState(resultsData[0]?.card_1_head);

  return (
    <div className={styles.mainWrapper} id="provenResults">
      <h1 className={styles.heading}>{resultsData?.heading && parse(resultsData?.heading)}</h1>
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
                {resultsData?.data?.map((item, index) => (
                  <Tab key={index} eventKey={item.card_1_head} title={item.card_1_head}>
                    <div className={styles.wraperSingleContent}>
                      <Row>
                        <Col lg={6}>
                          <Image
                            src={item.card_1_icon} // dynamic image
                            alt={item.card_1_head}
                            width={625}
                            height={565}
                          />
                        </Col>
                        <Col lg={6}>
                          <div className={styles.right_info}>
                            <h2 dangerouslySetInnerHTML={{ __html: item.heading }} />
                            <div className='w-100' dangerouslySetInnerHTML={{ __html: item.sub_head }} />
                            <div dangerouslySetInnerHTML={{ __html: item.description }} />
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
        {/* <Row> */}
        <div className={styles.LearnButton}>
          <button onClick={() => window.location.href = (resultsData?.redirect_url)} className={styles.buttonsmore}>
            Learn More
          </button>
        </div>

        {/* </Row> */}
      </Container>
    </div>
  );
};

export default ResultsSection;
