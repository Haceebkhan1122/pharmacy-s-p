import React from 'react'
import styles from "./storageCondition.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import parse from "html-react-parser";


const StorageCondition = ({ widgetData }) => {
    return (
        <div className={`${styles.storage}`}>
            <Container>
                <div className={`${styles.storageWrap}`}>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <Image src={widgetData?.data?.[0]?.image} alt="sem-p Medinice" width={575} height={285} />
                        </Col>
                        <Col md={6} className='ps-lg-5'>
                            <h3>{widgetData?.heading}</h3>
                            {/* <p>{data.HomePage.storage_text}</p> */}
                            <ul className={styles.listing}>
                                    {parse(widgetData?.description)}
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default StorageCondition