import React from 'react'
import styles from "./glpMedicine.module.scss"
import { Container, Row, Col } from 'react-bootstrap'
import glp1 from "../../assets/images/glp1.svg"
import glp2 from "../../assets/images/glp2.svg"
import glp3 from "../../assets/images/glp3.svg"
import Image from 'next/image';

function GlpMedicine() {
    return (
        <div className={`${styles.glpMedicine} pb-100`}>
            <Container>
                <Row>
                    <Col lg={8} className="">
                        <h2>Why Choose GLP-1 Medications</h2>
                    </Col>


                </Row>
                <Row>
                    <Col lg={3} className="">
                        <div className={styles.boxglpMedicine} >
                            <div className={styles.flexBox}>
                                <div className=''>
                                    <h4>Supports Weight Management  </h4>
                                </div>
                            </div>
                            <Image src={glp1} className="img-fluid"></Image>
                        </div>
                    </Col>

                    <Col lg={3} className="">
                        <div className={styles.boxglpMedicine} >
                            <div className={styles.flexBox}>
                                <div className=''>
                                    <h4>Controls Blood
                                        Sugar</h4>
                                </div>
                            </div>
                            <Image src={glp2} className="img-fluid"></Image>
                        </div>
                    </Col>

                    <Col lg={3} className="">
                        <div className={styles.boxglpMedicine} >
                            <div className={styles.flexBox}>
                                <div className=''>
                                    <h4>Improves Overall Health </h4>
                                </div>
                            </div>
                            <Image src={glp3} className="img-fluid"></Image>
                        </div>
                    </Col>

                    <Col lg={3} className="">
                        <div className={styles.boxglpMedicine} >
                            <div className={styles.flexBox}>
                                <div className=''>
                                    <h4>Convenient & Personalized</h4>
                                </div>
                            </div>
                            <Image src={glp1} className="img-fluid"></Image>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default GlpMedicine
