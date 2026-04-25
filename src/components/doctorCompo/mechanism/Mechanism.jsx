"use client";

import React from "react";
import {  Row, Col } from "react-bootstrap";
import styles from './mechanism.module.scss';
import Image from "next/image";
import parse from "html-react-parser";


const MechanismAction = ({ widgetData }) => {

    const features = [
        {
            icon: <Image width={60} height={60} src={widgetData?.data[0]?.card_3_icon} alt="icon" />,
            title: widgetData?.data[0]?.card_3_head && parse(widgetData?.data[0]?.card_3_head),
            desc: widgetData?.data[0]?.card_3_sub_head && parse(widgetData?.data[0]?.card_3_sub_head),
        },
        {
            icon: <Image width={60} height={60} src={widgetData?.data[0]?.card_4_icon} alt="icon" />, // Replace with your liver/glucagon icon
            title: widgetData && parse(widgetData?.data[0]?.card_4_head),
            desc: widgetData && parse(widgetData?.data[0]?.card_4_desc),
        },
        {
            icon: <Image width={60} height={60} src={widgetData?.data[0]?.card_5_icon} alt="icon" />, // Replace with your appetite icon
            title: widgetData && parse(widgetData?.data[0]?.card_5_head),
            desc: widgetData && parse(widgetData?.data[0]?.card_5_desc),
        },
    ];

    return (
        <section className={styles.mechanismSection}>
            <div className={styles.topSplit}>
                <Row className="h-100">
                    <Col lg={5} className="position-relative">
                        <div className={styles.doctorWrapper}>
                            <Image width={865} height={560} src={widgetData?.data[0]?.image} alt="Doctor" className={styles.doctorImg} />
                        </div>
                    </Col>
                    <Col lg={7} className={styles.textContent}>
                        <h3>{widgetData?.data[0]?.card_1_head && parse(widgetData?.data[0]?.card_1_head)}</h3>
                        <p>
                            {widgetData?.data[0]?.card_1_desc && parse(widgetData?.data[0]?.card_1_desc)}
                        </p>
                        <button className={styles.learnMoreBtn} onClick={() => window.location.href = (widgetData?.data?.[0]?.redirect_url)}>{widgetData?.data[0]?.button_text && parse(widgetData?.data[0]?.button_text)}</button>
                    </Col>
                </Row>
            </div>
            <div className={styles.bottomSection}>
                <Image width={1920} height={680} src={widgetData?.data[0]?.card_2_icon} alt="Lifestyle" className={styles.lifestyleImg} />
                <div className={styles.cardStack}>
                    {features.map((item, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.iconBox}>
                                <span> {item?.icon} </span>
                                <h3>{item.title}</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default MechanismAction;