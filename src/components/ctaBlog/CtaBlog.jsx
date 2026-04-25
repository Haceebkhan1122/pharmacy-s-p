import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./CtaBlogs.module.scss"
import Image from 'next/image'
import parse from "html-react-parser";

function CtaBlog({widgetData}) {
    
    return (
        <div className={`${styles.ctaBox} pb-100`}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col className='' lg={12}>
                        <div className={styles.boxCta}>
                            <Row>
                                <Col className='my-auto' lg={6}>
                                    <h2>{parse(widgetData?.heading)}</h2>
                                    <button>{parse(widgetData?.data[0]?.button_text)}</button>
                                </Col>
                                <Col className='' lg={6}>
                                    <Image width={426} height={357} src={widgetData?.data[0]?.image} alt="" className={styles.docImg} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default CtaBlog;
