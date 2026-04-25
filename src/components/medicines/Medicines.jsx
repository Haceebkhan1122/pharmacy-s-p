import React from 'react'
import styles from "./medicines.module.scss"
import { Container, Row, Col } from 'react-bootstrap'
import pr1 from "../../assets/images/pr1.svg"
import arrow from "../../assets/images/arrow.svg"
import Image from 'next/image';
import Link from 'next/link';

function Medicines() {
    return (
        <div className={`${styles.medicineBox}`}>
            <Container>
                <Row>
                    <Col lg={5} className="mx-auto">
                        <h2 className='text-center'>When it comes to weight loss, you’ve got options</h2>
                    </Col>


                </Row>
                <Row>
                    <Col lg={4} className="">
                        <div className={styles.boxMedicine}
                            style={{
                                background:
                                    "linear-gradient(120deg, rgba(229, 245, 213, 0.5) 0%, rgba(244, 246, 236, 0.5) 64.97%), #F4F6EC",
                            }}
                        >
                            <div className={styles.flexBox}>
                                <div className=''>
                                    <h4>Sem-P   </h4>
                                    <p>Lose upto 53% bodyweight</p>
                                </div>
                                <div className=''>
                                    <Link href="/"> <Image src={arrow} className="img-fluid"></Image></Link>



                                </div>
                            </div>
                            <Image src={pr1} className={`${styles.imgabs} img-fluid`}></Image>
                        </div>
                    </Col>
                    <Col lg={4} className="">
                        <div className={styles.boxMedicine}
                            style={{
                                background:
                                    "#EBF3FB",
                            }}
                        >
                            <div className={styles.flexBox}>
                                <div className=''>
                                    <h4>Sem-P   </h4>
                                    <p>Lose upto 53% bodyweight</p>
                                </div>
                                <div className=''>

                                    <Link href="/"> <Image src={arrow} className="img-fluid"></Image></Link>


                                </div>
                            </div>
                            <Image src={pr1} className={`${styles.imgabs} img-fluid`}></Image>
                        </div>
                    </Col>
                    <Col lg={4} className="">
                        <div className={styles.boxMedicine}
                            style={{
                                background:
                                    "#F8F6F4",
                            }}
                        >
                            <div className={styles.flexBox}>
                                <div className=''>
                                    <h4>Sem-P   </h4>
                                    <p>Lose upto 53% bodyweight</p>
                                </div>
                                <div className=''>

                                    <Link href="/"> <Image src={arrow} className="img-fluid"></Image></Link>



                                </div>
                            </div>
                            <Image src={pr1} className={`${styles.imgabs} img-fluid`}></Image>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Medicines
