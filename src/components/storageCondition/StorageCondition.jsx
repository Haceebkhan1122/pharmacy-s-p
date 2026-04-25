'use client';
import React from 'react';
import styles from "./storageCondition.module.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';

const StorageCondition = ({ widgetData }) => {
    // Safety check for data
    if (!widgetData || !widgetData.data || widgetData.data.length === 0) {
        return null;
    }

    const content = widgetData.data[0];

    return (
        <div className={styles.storage}>
            <Container>
                <div className={styles.storageWrap}>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <div className={styles.imgBox}>
                                <Image
                                    src={content.image}
                                    alt="Storage Conditions"
                                    width={500}
                                    height={500}
                                    layout="responsive"
                                />
                            </div>
                        </Col>
                        <Col md={6} className='ps-lg-5'>
                            {/* Heading from the main widget object */}
                            <h3>{widgetData.heading}</h3>

                            {/* Since the API returns an HTML string in 'description', 
                                we use dangerouslySetInnerHTML to render the list.
                            */}
                            <div
                                className={styles.listing}
                                dangerouslySetInnerHTML={{ __html: content.description }}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default StorageCondition;