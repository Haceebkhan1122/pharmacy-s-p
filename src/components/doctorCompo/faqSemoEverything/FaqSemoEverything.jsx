'use client';
import React from 'react'
import styles from './faqSemoEverything.module.scss';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';

const FaqSemoEverything = ({ data }) => {
    return (

        <div className={styles.FaqSemoEverything}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2> Everything you need to know </h2>
                        <div className={styles.FaqSemoEverythingBoxx}>
                            <h2 className={styles.FaqSemoEverythingHeading}> {data?.FaqSemoEverything?.FaqSemoEverything_heading} </h2>
                            <Accordion defaultActiveKey="0" className={`${styles.accordianCustom} faqEverything`}>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className={styles.accordianCustomHeader}>
                                        <p> How does SNAC technology enable oral absorption of semaglutide? </p>
                                    </Accordion.Header>
                                    <Accordion.Body className={styles.accordianCustomBody}>
                                        1

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className={styles.accordianCustomHeader}>
                                        <p> Which patients may be appropriate candidates for oral GLP-1 therapy? </p>
                                    </Accordion.Header>
                                    <Accordion.Body className={styles.accordianCustomBody}>
                                        2


                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className={styles.accordianCustomHeader}>
                                        <p> What are the administration requirements to optimize absorption of SEM-O®? </p>
                                    </Accordion.Header>
                                    <Accordion.Body className={styles.accordianCustomBody}>
                                        3


                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header className={styles.accordianCustomHeader}>
                                        <p> How does oral semaglutide compare conceptually with injectable GLP-1 receptor agonists? </p>
                                    </Accordion.Header>
                                    <Accordion.Body className={styles.accordianCustomBody}>
                                    4
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header className={styles.accordianCustomHeader}>
                                        <p> What are the key clinical considerations when switching patients from injectable to oral GLP-1 therapy? </p>
                                    </Accordion.Header>
                                    <Accordion.Body className={styles.accordianCustomBody}>
                                        5
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div></Col>
                </Row>
            </Container>

        </div>
    )
}

export default FaqSemoEverything
