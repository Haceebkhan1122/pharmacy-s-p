'use client';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './doseCalculation.module.scss';
import Image from 'next/image';

const DoseCalculation = ({ widgetData }) => {
    // Basic check to prevent crashes if data is missing
    if (!widgetData || !widgetData.data || widgetData.data.length === 0) {
        return null;
    }

    const content = widgetData.data[0];

    return (
        <div className={styles.wraper}>
            <Container fluid className='p-0'>
                <Col lg={12}>
                    <Row className='gx-0'>
                        <div className={styles.headerArea}>
                            {/* Dynamic Heading from API */}
                            <h2>{widgetData.heading || "Proven Results"}</h2>
                        </div>

                        <div className={styles.mainTabBox}>
                            <Row className="align-items-center">
                                <Col lg={6} className='p-0'>
                                    <div className={styles.imgBox}>
                                        {/* Dynamic Main Image */}
                                        <img
                                            src={content.image}
                                            alt="Medication"
                                            layout="responsive"
                                        />
                                    </div>
                                </Col>
                                <Col lg={6} xs={12} md={12} className='p-0'>
                                    <div className={styles.imgBox11}>
                                        <h3> {content.card_1_head || "Dose Calculation"} </h3>

                                        <div className="mb-3">
                                            <Image
                                                src={content.card_1_icon}
                                                alt="Dose Icon"
                                                width={400}
                                                height={200}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
{/* 
                                        <div className={styles.tableResponsive}>
                                            <table className={styles.doseTable}>
                                                <thead>
                                                    <tr>
                                                        <th>Dose in gram</th>
                                                        <th>Frequency</th>
                                                        <th>Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Initiate with 0.25 mg</td>
                                                        <td>Once Weekly</td>
                                                        <td>Continue for 4 weeks</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Escalate & Maintain to 0.5 mg</td>
                                                        <td>Once Weekly</td>
                                                        <td>Continue for 4 weeks</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Escalate & Maintain to 1.0 mg</td>
                                                        <td>Once Weekly</td>
                                                        <td>Continue till doctor prescription</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Maintain at 2.0 mg</td>
                                                        <td>Once Weekly</td>
                                                        <td>Continue till doctor prescription</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> */}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Container>
        </div>
    );
};

export default DoseCalculation;