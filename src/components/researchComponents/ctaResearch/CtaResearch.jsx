import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import doc from '../../../assets/images/png/doc8.png'
import styles from "./ctaResearch.module.scss"
import Image from 'next/image'
import parse from "html-react-parser";

function CtaResearch({widgetData}) {

    return (
        <div className={`${styles.ctaBox} pb-100`}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col className='' lg={12}>
                        <div className={styles.boxCta}>
                            <Row>
                                <Col className='' lg={6}>
                                <div className={styles.data_content}>
                                    <h2>{widgetData && parse(widgetData?.heading)}</h2>
                                    {/* <p> Connect with a Sem-P specialist today </p> */}
                                    <button>{widgetData && parse(widgetData?.data[0]?.button_text)} <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8768 15.9982L14.9375 7.05882L17.0588 4.9375L28.1194 15.9982L17.0588 27.0588L14.9375 24.9376L23.8768 15.9982Z" fill="#1A1A1A" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26 17.5H2V14.5H26V17.5Z" fill="#1A1A1A" />
                                        </svg></button>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-center align-items-end' lg={6}>
                                    <Image height={357} width={426} src={widgetData?.data[0]?.image} alt="doctor" className={styles.docImg} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default CtaResearch;
