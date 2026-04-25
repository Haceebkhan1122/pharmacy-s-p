
import React from 'react'
import styles from './asideObesity.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import aboutHealthImg from '../../assets/images/png/asideRect.png';
import Image from 'next/image';

const AsideObesity = () => {
    return (
        <div className={styles.AsideObesity}>
            <Container>
                <Row>
                         <Col lg={6} md={6} sm={6}>
                        <div className={styles.rightInfoo}>
                            <h1> Did you know that obesity is directly linked to 35 major diseases and cancers? </h1>
                            <p>Affecting everything from the heart and lungs to the liver and joints, these conditions can have wide-reaching effects. Learn more below.</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <Image src={aboutHealthImg} alt='' priority className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AsideObesity
