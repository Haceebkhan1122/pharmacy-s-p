import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// Local asset ko fallback ke liye rakh sakte hain agar image na mile
import docFallback from '../../../assets/images/png/doc8.png'
import styles from "./ctaPatientTool.module.scss"
import Image from 'next/image'

function CtaPatientTool({ widgetData }) {
    // API data extraction
    const heading = widgetData?.heading
    const itemData = widgetData?.data?.[0];
    const buttonText = itemData?.button_text || "View Research Studies";
    const apiImage = itemData?.image;

    return (
        <div className={`${styles.ctaBox} pb-100`}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col className='' lg={12}>
                        <div className={styles.boxCta}>
                            <Row className='h-100'>
                                <Col className='h-100' lg={6}>
                                    <div className={styles.wrapeInfoo}>
                                        {/* API Heading */}
                                        <h2>{heading}</h2>
                                        {/* API Button Text */}
                                        <button>{buttonText}</button>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-center align-items-end' lg={6}>
                                    {/* API Image with Fallback */}
                                    <Image
                                        src={apiImage || docFallback}
                                        alt="clinical evidence"
                                        className={styles.docImg}
                                        width={500} // Next.js Image requires width/height for remote patterns
                                        height={500}
                                        unoptimized // Agar S3 ki image resize nahi ho rahi toh ye use karein
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default CtaPatientTool;