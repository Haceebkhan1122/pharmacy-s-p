'use client';

import React, { useState } from "react";
import styles from "./diabetologist.module.scss";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "../videomodal/videomodal";

const Diabetologist = ({ widgetData }) => {
    const [open, setOpen] = useState(false);
    const [videoId, setVideoId] = useState("");
    return (
        <div className={`${styles.diabetologist}`}>
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col md={12} className={`${styles.diabetologistImagesContainer}`}>
                        <Row>
                            <div className={`${styles.headingContainer} col-lg-12`}>
                                <h3>{widgetData?.heading}</h3>
                            </div>
                            <Col md={4} className="mt-3 mt-md-0">
                                <div className={`${styles.diabetologistImageOne}`} onClick={() => { setVideoId(widgetData?.data?.[0]?.card_1_link); setOpen(true); }}>
                                    <Image
                                        src={widgetData?.data?.[0]?.card_1_icon}
                                        alt="Thumbnail Image"
                                        fill               // fills parent container
                                        style={{ objectFit: "contain" }} // or cover
                                        priority />
                                    {/* <h5>Dr. Rehan Omer</h5>
                  <span>Cardiologist</span> */}
                                    {/* <span className={styles.youtIco}>
                    <Image src={playButton} alt="icon" />
                  </span> */}
                                </div>
                            </Col>
                            <Col md={4} className="mt-3 mt-md-0">
                                <div className={`${styles.diabetologistImageTwo}`} onClick={() => { setVideoId(widgetData?.data?.[0]?.card_2_link); setOpen(true); }}>
                                    <Image
                                        src={widgetData?.data?.[0]?.card_2_icon}
                                        alt="Thumbnail Image"
                                        fill               // fills parent container
                                        style={{ objectFit: "contain" }} // or cover
                                        priority />
                                    {/* <h5>Dr. Syeda Urooj Riaz</h5>
                  <span>Diabetologist</span> */}
                                    {/* <span className={styles.youtIco}>
                    <Image src={playButton} alt="icon" />
                  </span> */}
                                </div>
                            </Col>
                            <Col md={4} className="mt-3 mt-md-0">
                                <div className={`${styles.diabetologistImageThree}`} onClick={() => { setVideoId(widgetData?.data?.[0]?.card_3_link); setOpen(true); }}>
                                    <Image
                                        src={widgetData?.data?.[0]?.card_3_icon}
                                        alt="Thumbnail Image"
                                        fill               // fills parent container
                                        style={{ objectFit: "contain" }} // or cover
                                        priority
                                    />
                                    {/* <h5>Dr. Muhammad Hashim</h5>
                  <span>Diabetologist</span> */}
                                    {/* <span className={styles.youtIco}>
                    <Image src={playButton} alt="icon" />
                  </span> */}
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.reeadMore}>
                                    <button className={styles.readMoreButton} onClick={() => window.location.href = (widgetData?.redirect_url)}>View More</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <VideoModal
                isOpen={open}
                onClose={() => setOpen(false)}
                videoId={videoId}
            />
        </div>
    );
};

export default Diabetologist;
