"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./researchStudiesJournal.module.scss";
import parse from "html-react-parser";

const ResearchStudiesJournal = ({widgetData}) => {

    const studies = [
        {
            journal: widgetData?.data[0]?.heading && parse(widgetData?.data[0]?.heading),
            title: widgetData?.data[0]?.sub_head && parse(widgetData?.data[0]?.sub_head),
            date: widgetData?.data[0]?.description && parse(widgetData?.data[0]?.description),
            background: '#EBF3FB',
        },
               {
            journal: widgetData?.data[1]?.heading && parse(widgetData?.data[1]?.heading),
            title: widgetData?.data[1]?.sub_head && parse(widgetData?.data[1]?.sub_head),
            date: widgetData?.data[1]?.description && parse(widgetData?.data[1]?.description),
            background: '#E7FFCE',
        },
    ];

    return (
        <section className={styles.researchSection}>
            <Container>
                <div className={styles.headerArea}>
                    <h2>{widgetData?.heading && parse(widgetData?.heading)}</h2>
                    <p>
                        {widgetData?.description && parse(widgetData?.description)}
                    </p>
                </div>

                <Row className="justify-content-center">
                    {studies?.map((study, index) => (
                        <Col lg={6} md={12} key={index} className="mb-4">
                            <div style={{background: study?.background}} className={styles.studyCard}>
                                <div>
                                    <span className={styles.journalName}>{study.journal}</span>
                                    <h3>{study.title}</h3>
                                    <span className={styles.date}>{study.date}</span>
                                </div>
                                <div className={`d-flex flex-column flex-md-row gap-3 gap-md-5 ${styles.buttonContainer}`}>
                                    <button className={styles.viewBtnDownload}>View Research</button>
                                    {/* <button className={styles.viewBtnDownload}>Download Paper</button> */}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                 <div className={`${styles.LearnButton} mt-5`}>
                <button onClick={() => window.location.href = (widgetData?.redirect_url)} className={styles.buttonsmore}>
                Learn More
          </button>
        </div>
            </Container>
        </section>
    );
};

export default ResearchStudiesJournal;