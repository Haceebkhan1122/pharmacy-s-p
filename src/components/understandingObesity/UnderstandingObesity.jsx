import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./understandingObesity.module.scss";
import Image from "next/image";
import bannerImage from '../../assets/images/png/obesityMattersbanner.png';
import svg1 from '../../assets/images/svg/greenDanger.svg';

function UnderstandingObesity() {

  return (
    <div className={`${styles.PakUnderstands} PakUnderstands`}>
      <h1> Why Understanding Obesity Matters </h1>
      <Container>
        <Row className="h-100">
          <Col lg={12} sm={12} md={6} xs={12}>
            <Image src={bannerImage} alt="" />
            <p className={styles.oo1}> Weight gain is influenced by hormones, metabolism, genetics, stress, and lifestyle. Recognizing it as a medical condition is the first step toward better health.</p>
            <p className={styles.oo2}>Here is how understanding obesity can make a difference:</p>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image src={svg1} alt="" />
              <h4> See diabetes as a medical condition </h4>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image src={svg1} alt="" />
              <h4> Learn how it affects the body </h4>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.singleCard}>
              <Image src={svg1} alt="" />
              <h4> Recognize early signs & risks </h4>
            </div>
          </Col>
          <p className={styles.hiiggg}> Obesity can increase the risk of diabetes, heart disease, fatty liver, and more.  Early awareness and medical guidance can help protect your health. </p>
        </Row>
      </Container>
    </div>
  );
}

export default UnderstandingObesity;