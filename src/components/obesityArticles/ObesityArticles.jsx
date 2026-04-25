'use client';

import { Col, Container, Row } from 'react-bootstrap';
import Image from "next/image";
import articleImage from "../../assets/images/png/jeans.png"
import React from 'react';
import article1 from "../../assets/images/png/eatsmart.png"
import article2 from "../../assets/images/png/liftWeight.png"
import article3 from "../../assets/images/png/measureWeight.png"
import styles from './obesityArticles.module.scss';
import ObesitySingleArticle from '../fitnessGuideArticleSingle/ObesitySingleArticle';

export default function ObesityArticles() {

    return (
        <div className={styles.obesityArticles}>
            <Container >
                <Row>
                    <Col md={6}>
                        <div className={`${styles.article}`}>
                            <Image src={articleImage} alt="Nutrition Article Image" className="img-fluid" />
                            <h6>FITNESS</h6>
                            <h4>Body Weight Exercises For Strength Training</h4>
                            <p>Are you fat or are you obese? Is it due to your lifestyle or something more serious like an underlying cause – an illne...</p>
                            <button onClick={() => router.push("/article/body-weight-exercises-for-strength-training")} >Read Article</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        {/* <fitnessArticleList /> */}
                        <div className={`${styles.fitnessArticleList}`}>
                            <Container>
                                <Row>
                                    <Col md={12} style={{ marginBottom: "30px", padding: "0" }}>
                                        <ObesitySingleArticle href="/article/yoga-a-life-changing-approach" img={article1} heading="Yoga – A Life-Changing Approach" />
                                    </Col>
                                    <Col md={12} style={{ marginBottom: "30px", padding: "0" }}>
                                        <ObesitySingleArticle img={article3} heading="Weight Loss Tips: Avoid These 8 Habits Slowing Down Your Metabolism" href="/article/weight-loss-tips-avoid-these-8-habits-slowing-down-your-metabolism" />
                                    </Col>
                                    <Col md={12} style={{ padding: "0" }}>
                                        <ObesitySingleArticle img={article2} heading="Unlocking Natural Muscle Growth: Your Guide To Bulking Up Through Weight Training" href="/article/unlocking-natural-muscle-growth-your-guide-to-bulking-up-through-weight-training" />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col lg={12} className={`${styles.spacing}`}>
                        <hr></hr>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
