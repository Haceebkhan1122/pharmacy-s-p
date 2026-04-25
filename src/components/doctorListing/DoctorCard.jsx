'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import doctor from "../../assets/images/png/dummy_doc.png"
import doctorProfile from "../../assets/images/png/doc_profile.png"
import styles from './doctorListing.module.scss'

const DoctorCard = () => {
    const [showDoctorInfo, setShowDoctorInfo] = useState(false);

    const onCloseDocInfo = () => {
        setShowDoctorInfo(false);
    }

    return (
        <>
            <Col md={4} className='ps-0'>
                <div className={styles.doctorCard}>
                    <Card className={styles.cardCustom}>
                        <Image src={doctor} alt="Doctor Image" />
                        <h3 className={styles.doctorName}>Dr. Aamna Nazish Iqbal</h3>
                        <p className={styles.speciality}>Endocrinologist</p>
                        <p className={styles.education}>M.B.B.S, F.C.P.S, MRCOG</p>
                        <button className='btn btn-primary' onClick={() => setShowDoctorInfo(true)}>View Details</button>
                    </Card>
                </div>
            </Col>
            <Col md={4} className='ps-0'>
                <div className={styles.doctorCard}>
                    <Card className={styles.cardCustom}>
                        <Image src={doctor} alt="Doctor Image" />
                        <h3 className={styles.doctorName}>Dr. Aamna Nazish Iqbal</h3>
                        <p className={styles.speciality}>Endocrinologist</p>
                        <p className={styles.education}>M.B.B.S, F.C.P.S, MRCOG</p>
                        <button className='btn btn-primary' onClick={() => setShowDoctorInfo(true)}>View Details</button>
                    </Card>
                </div>
            </Col>
            <Col md={4} className='ps-0'>
                <div className={styles.doctorCard}>
                    <Card className={styles.cardCustom}>
                        <Image src={doctor} alt="Doctor Image" />
                        <h3 className={styles.doctorName}>Dr. Aamna Nazish Iqbal</h3>
                        <p className={styles.speciality}>Endocrinologist</p>
                        <p className={styles.education}>M.B.B.S, F.C.P.S, MRCOG</p>
                        <button className='btn btn-primary' onClick={() => setShowDoctorInfo(true)}>View Details</button>
                    </Card>
                </div>
            </Col>
            <Modal
                className={`filterModal ${styles.docInfoModal}`}
                show={showDoctorInfo}
                onHide={onCloseDocInfo}
                centered={true}
                keyboard={true}
                backdrop="static"
                aria-labelledby="disclaimer-title"
            >
                <Modal.Body className={styles.body}>
                    <div className={styles.modalBodyContent}>
                        <button
                            type="button"
                            aria-label="Close disclaimer"
                            className={styles.closeBtn}
                            onClick={onCloseDocInfo}
                        >
                            ×
                        </button>
                    </div>
                    <div className={styles.docInfoWrapper}>
                        <Row>
                            <Col md={12} className='ps-0 pe-0'>
                                <div className={styles.topDocDetails}>
                                    <div className={styles.docProfileArea}>
                                        <Image src={doctorProfile} alt="Doctor Profile" />
                                    </div>
                                    <div className={styles.docProfileArea}>
                                        <h3 className={styles.Name}>Dr. Muhammad Owais Rashid</h3>
                                        <h5 className={styles.speciality}>Diabetologist</h5>
                                        <h5 className={styles.education}>M.B.B.S, F.C.P.S, MRCOG</h5>
                                    </div>
                                </div>
                            </Col>
                            <hr />
                            <Col md={12} className='ps-0 pe-0'>
                                <div className={styles.hospitalInfoWrapper}>
                                    <div className={styles.hospitalInfo}>
                                        <h3>Aga Khan University Hospital</h3>
                                    </div>
                                    <div className={styles.specificHospitalDetails}>
                                        <div className='d-flex'>
                                            <div className={styles.details}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                                                    <path d="M7.54975 9.36525C8.04725 9.36525 8.47258 9.18808 8.82575 8.83375C9.17908 8.47942 9.35575 8.0535 9.35575 7.556C9.35575 7.0585 9.17858 6.63308 8.82425 6.27975C8.46992 5.92658 8.04392 5.75 7.54625 5.75C7.04875 5.75 6.62342 5.92717 6.27025 6.2815C5.91692 6.63583 5.74025 7.06183 5.74025 7.5595C5.74025 8.057 5.91742 8.48233 6.27175 8.8355C6.62608 9.18867 7.05208 9.36525 7.54975 9.36525ZM7.548 17.0135C9.50433 15.2622 11.0014 13.5823 12.0393 11.974C13.0771 10.3657 13.596 8.957 13.596 7.748C13.596 5.925 13.0168 4.42633 11.8585 3.252C10.7002 2.07767 9.26333 1.4905 7.548 1.4905C5.83267 1.4905 4.39583 2.07767 3.2375 3.252C2.07917 4.42633 1.5 5.925 1.5 7.748C1.5 8.957 2.01892 10.3657 3.05675 11.974C4.09458 13.5823 5.59167 15.2622 7.548 17.0135ZM7.548 19.0095C5.03133 16.8288 3.14417 14.7994 1.8865 12.9212C0.628833 11.0429 0 9.3185 0 7.748C0 5.44033 0.746417 3.57208 2.23925 2.14325C3.73225 0.714416 5.50183 0 7.548 0C9.59417 0 11.3637 0.714416 12.8567 2.14325C14.3496 3.57208 15.096 5.44033 15.096 7.748C15.096 9.3185 14.4672 11.0429 13.2095 12.9212C11.9518 14.7994 10.0647 16.8288 7.548 19.0095Z" fill="#77AA42" />
                                                </svg>
                                            </div>
                                            <div className={styles.details}>
                                                <p>National Stadium Rd, Aga Khan University Hospital, Karachi</p>
                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <div className={styles.details}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M15.473 16.527L16.527 15.473L12.75 11.696V7H11.25V12.3038L15.473 16.527ZM12.0017 21.5C10.6877 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.2795C6.13308 4.42433 7.13833 3.74725 8.294 3.24825C9.44967 2.74942 10.6844 2.5 11.9983 2.5C13.3123 2.5 14.5473 2.74933 15.7035 3.248C16.8597 3.74667 17.8653 4.42342 18.7205 5.27825C19.5757 6.13308 20.2528 7.13833 20.7518 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2507 14.5473 20.752 15.7035C20.2533 16.8597 19.5766 17.8653 18.7218 18.7205C17.8669 19.5757 16.8617 20.2528 15.706 20.7518C14.5503 21.2506 13.3156 21.5 12.0017 21.5ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z" fill="#77AA42" />
                                                </svg>
                                            </div>
                                            <div className={styles.details}>
                                                <p>Mon, Wed, Fri: 2:00 PM - 4:30 PM<br />Sat: 10:00 AM - 2:00 PM</p>
                                            </div>
                                        </div>
                                        <div className='d-flex'>
                                            <div className={styles.details}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M19.4402 20.5C17.5557 20.5 15.6625 20.0618 13.7605 19.1855C11.8587 18.3092 10.1113 17.073 8.51825 15.477C6.92542 13.8808 5.69083 12.1333 4.8145 10.2345C3.93817 8.33583 3.5 6.44425 3.5 4.55975C3.5 4.25692 3.6 4.00458 3.8 3.80275C4 3.60092 4.25 3.5 4.55 3.5H7.8115C8.064 3.5 8.28675 3.58242 8.47975 3.74725C8.67275 3.91192 8.7955 4.11542 8.848 4.35775L9.42125 7.3C9.46092 7.573 9.45258 7.80758 9.39625 8.00375C9.33975 8.19992 9.23842 8.36467 9.09225 8.498L6.78275 10.7462C7.15442 11.4269 7.57908 12.0708 8.05675 12.678C8.53425 13.285 9.05125 13.8647 9.60775 14.4173C10.1564 14.9661 10.7397 15.4757 11.3577 15.9462C11.9757 16.4167 12.6431 16.8546 13.3598 17.2598L15.6038 14.9963C15.7603 14.8334 15.9498 14.7192 16.1723 14.6538C16.3946 14.5884 16.6257 14.5724 16.8655 14.6058L19.6423 15.1713C19.8948 15.2379 20.1008 15.3667 20.2605 15.5577C20.4202 15.7487 20.5 15.9654 20.5 16.2078V19.45C20.5 19.75 20.3991 20 20.1973 20.2C19.9954 20.4 19.7431 20.5 19.4402 20.5ZM6.073 9.327L7.85775 7.61925C7.88975 7.59358 7.91058 7.55833 7.92025 7.5135C7.92992 7.46867 7.92833 7.427 7.9155 7.3885L7.48075 5.15375C7.46792 5.10258 7.4455 5.06417 7.4135 5.0385C7.3815 5.01283 7.33983 5 7.2885 5H5.15C5.1115 5 5.07942 5.01283 5.05375 5.0385C5.02825 5.06417 5.0155 5.09625 5.0155 5.13475C5.06667 5.81808 5.1785 6.51225 5.351 7.21725C5.52333 7.92242 5.764 8.62567 6.073 9.327ZM14.773 17.9693C15.4358 18.2783 16.1272 18.5145 16.847 18.678C17.567 18.8413 18.2397 18.9384 18.8652 18.9693C18.9037 18.9693 18.9358 18.9564 18.9615 18.9307C18.9872 18.9051 19 18.873 19 18.8345V16.7308C19 16.6794 18.9872 16.6377 18.9615 16.6058C18.9358 16.5737 18.8974 16.5513 18.8462 16.5385L16.7462 16.1115C16.7077 16.0987 16.6741 16.0971 16.6453 16.1067C16.6164 16.1164 16.5859 16.1372 16.5538 16.1692L14.773 17.9693Z" fill="#77AA42" />
                                                </svg>
                                            </div>
                                            <div className={styles.details}>
                                                <a href="tel:0333287654">0333-287654</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DoctorCard
