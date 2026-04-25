import React from 'react'
import styles from "./bloodSugarSection.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import parse from "html-react-parser";

function BloodSugarSection({ data }) {

    return (
        <div className={`${styles.bloodSmainBox} pt-100 pb-100`} id="dosing">
            <Container>
                <Row>
                    <Col lg={11} className='mx-auto'>
                        <h2 className={styles.BloodSugarHeading} >{parse(data.HomePage.proven_significantly_upper)} </h2>
                        {/* <p>{parse(data.HomePage.proven_significantly_upper_para)}</p> */}
                    </Col>
                    {/* <Col lg={12} className='mx-auto'>
                        <div className={styles.box01}>
                            <h3>{data?.HomePage?.semp_lower_percentage}</h3>
                            <p>{data?.HomePage?.starting_a1c}</p>
                        </div>
                    </Col> */}
                    {/* <Col lg={6} className='mx-auto'>
                        <div className={`${styles.box001} ${styles.boxstyle}`}>
                            <h6>{data?.HomePage?.reduction_average}</h6>
                            <p>{data?.HomePage?.reduction_text}</p>
                        </div>
                    </Col>
                    <Col lg={6} className='mx-auto'>
                        <div className={`${styles.box002} ${styles.boxstyle}`}>
                            <h6>{data?.HomePage?.weight_loss}</h6>
                            <p>{data?.HomePage?.average_weight}</p>
                        </div>
                    </Col> */}
                    <Col lg={6} md={6} className='mx-auto'>
                        <div className={`${styles.box001} ${styles.boxstyle}`}>
                            <h6>{data?.HomePage?.reduction_average}</h6>
                            <ul>
                                <li>{data?.HomePage?.reduction_text1}</li>
                                <li>{data?.HomePage?.reduction_text2}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='mx-auto'>
                        <div className={`${styles.box002} ${styles.boxstyle}`}>
                            <h6>{parse(data?.HomePage?.weight_loss)}</h6>
                            <ul>
                                <li>{data?.HomePage?.average_weight1}</li>
                                <li>{data?.HomePage?.average_weight2}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={12} className='mx-auto'>
                        <div className={styles.wraper_boo}>
                            <a target='_blank' href='https://www.sciencedirect.com/science/article/abs/pii/S221385871730013X' className={`${styles.safety}`}>{data.HomePage.paragraph}</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BloodSugarSection
