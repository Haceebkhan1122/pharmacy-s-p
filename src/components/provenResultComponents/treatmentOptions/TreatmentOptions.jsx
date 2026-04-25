import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./treatmentOptions.module.scss";
import HeartIcon from "../../../assets/images/svg/heartIcon.svg";
import Image from "next/image";
import parse from "html-react-parser";

const TreatmentOptions = ({widgetData}) => {

  return (
    <div className={styles.treatmentSection}>
      <Container>
        {/* Header */}
        <Row>
          <Col>
            <h2 className={styles.mainHeading}>
               {widgetData && parse(widgetData?.heading)}
            </h2>
          </Col>
        </Row>

        {/* Organizations Cards */}
        <Row className={styles.organizationsRow}>
          <Col lg={4} xs={6} md={4} sm={6}>
            <div className={styles.orgCard}>
              <h3 className={styles.orgTitle}>
               {widgetData && parse(widgetData?.data[0]?.description)}
              </h3>
            </div>
          </Col>
          <Col lg={4} xs={6} md={4} sm={6}>
            <div className={styles.orgCard}>
              <h3 className={styles.orgTitle}>
                {widgetData && parse(widgetData?.data[0]?.card_1_desc)}
              </h3>
            </div>
          </Col>
          <Col lg={4} xs={6} md={4} sm={6}>
            <div className={styles.orgCard}>
              <h3 className={styles.orgTitle}>
                {widgetData && parse(widgetData?.data[0]?.card_2_desc)}
              </h3>
            </div>
          </Col>
        </Row>

        {/* ASCVD Section */}
        <Row className={styles.ascvdRow}>
          <Col>
            <div className={styles.ascvdCard}>
              <div className={styles.ascvdContent}>
                <div className={styles.heartIcon}>
                  <Image src={HeartIcon} alt="Heart Icon" />
                </div>
                <p className={styles.ascvdText}>
                  {widgetData && parse(widgetData?.data[0]?.card_3_desc)}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Patient Categories */}
        <Row className={styles.patientCategoriesRow}>
          <Col lg={6} md={6} sm={12} className="mb-3">
            <div className={styles.categoryCard}>
              <div className={styles.bmiIcon}>
                <img src={widgetData?.data[0]?.card_4_icon} alt="BMI Icon" />
              </div>
              <p className={styles.categoryText}>{widgetData && parse(widgetData?.data[0]?.card_4_desc)}</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-3">
            <div className={styles.categoryCard}>
              <div className={styles.hba1cIcon}>
                <img src={widgetData?.data[0]?.card_5_icon} alt="HbA1c Icon" />
              </div>
              <p className={styles.categoryText}>
               {widgetData && parse(widgetData?.data[0]?.card_5_desc)}
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default TreatmentOptions;
