'use client';
import React, { useEffect, useState } from 'react'
import styles from './dailyDoseResearch.module.scss';
import Capsule from '../../../assets/images/png/whatissemo.png';
import Image from 'next/image';
import { capitalize } from '@mui/material';
import { Col, Row, Container } from 'react-bootstrap';

const DailyDoseResearch = ({ data }) => {
    const [isMobileView, setIsMobileView] = useState(false);

    // 🔹 Detect screen size & update on resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // mobile breakpoint
        };
        handleResize(); // set initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container>
            <div className={`${styles.maindailyDoseWrapper} maindailyDoseWrapper`} id="whatissemo">
                <div className={styles.dailyDoseWrapper}>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <div className={styles.leftSide}>
                                <h3> Research at SEM-O </h3>
                                <h4>
                                    At SEM-O, we are committed to advancing safe and effective care. By sharing our research with the medical community, we aim to improve standards and support evidence-based decision making.
                                </h4>
                                <h4> Our studies focus on program quality, safety, and patient adherence, using real-world evidence from self-directed members. By sharing these insights, we contribute meaningful knowledge to the medical community and help enhance patient outcomes. </h4>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.wrape_box}>
                                <Image src={Capsule} alt='' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default DailyDoseResearch
