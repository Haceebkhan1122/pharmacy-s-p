'use client';
import React, { useEffect, useState } from 'react'
import styles from './dailyDoseDoctor.module.scss';
import Capsule from '../../../assets/images/png/semp1.png';
import Image from 'next/image';
import { capitalize } from '@mui/material';
import { Col, Row, Container } from 'react-bootstrap';

const DailyDoseDoctor = ({ data }) => {
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
                                <h3> About Sem-P (Semaglutide) </h3>
                                <h4>
                                    SEM-P (semaglutide) is a long-acting injectable GLP-1 receptor agonist indicated for the management of type 2 diabetes mellitus and obesity.
                                </h4>
                                <ul>
                                    <li> Selective GLP-1 receptor activation </li>
                                    <li> Once-weekly subcutaneous administration </li>
                                    <li>Addresses both fasting and post-prandial glucose </li>
                                    <li> Established role in metabolic disease management </li>
                                </ul>
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

export default DailyDoseDoctor
