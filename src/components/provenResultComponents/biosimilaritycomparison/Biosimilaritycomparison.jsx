"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./biosimilaritycomparison.module.scss";
import Image from "next/image";
import parse from "html-react-parser";
const BiosimilarityComparison = ({widgetData}) => {

  return (
    <div className={styles.biosimilaritySection}>
      <Container>
        {/* Header */}
        <Row>
          <Col lg={12}>
            <h2 className={styles.mainHeading}>
              {widgetData && parse(widgetData?.heading)}
            </h2>
            <p className={styles.subHeading}>
              {widgetData && parse(widgetData?.description)}
            </p>
          </Col>
        </Row>
        <Row>
          <img src={widgetData?.data[0]?.image}/>
        </Row>

        {/* <Row className={styles.approvalStepsRow}>
          {approvalSteps?.map((step, index) => (
            <Col key={index} lg={3} md={6} sm={6} xs={6} className="mb-4">
              <div className={styles.stepCard}>
                <h3 className={styles.stepTitle}>{step.title}</h3>

                <div className={styles.arrowContainer}>
                  <Image src={arrowIcon} priority />
                </div>

                <div className={styles.checkmarkContainer}>
                  <Image src={CheckMarkIcon} />
                </div>

                <p className={styles.stepSubtitle}>{step.subtitle}</p>

                <div className={styles.brandLogo}>
                  <Image src={SempLogo} />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className={styles.carouselRow}>
          <Col lg={12}>
            <div className={styles.carouselContainer}>
              <button
                className={`${styles.carouselButton} ${styles.prevButton}`}
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                >
                  <path
                    d="M14 37.7227L16.85 34.9227L7.65 25.7227H48V21.7227H7.65L16.8 12.5227L14 9.72266L0 23.7227L14 37.7227Z"
                    fill="#0F345A"
                  />
                </svg>
              </button>

              <div
                className={styles.benefitsCarousel}
                style={{
                  backgroundImage: `url(${dosageBg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Row className="justify-content-center align-items-center h-100">
                  {benefitSlides[currentSlide].items.map((item, index) => (
                    <Col
                      key={index}
                      lg={4}
                      md={4}
                      sm={12} // Tablet par full width ya list view
                      xs={12}
                     className={`mb-3 mb-md-0 ${
    index === 1 ? styles.middleCol : ""
  }`}
                    >
                      <div className={styles.benefitItem}>
                        <Image src={item.icon} className={styles.benefitIcon} />
                        <p className={styles.benefitText}>{item.title}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              <button
                className={`${styles.carouselButton} ${styles.nextButton}`}
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                >
                  <path
                    d="M34 37.7227L31.15 34.9227L40.35 25.7227H0V21.7227H40.35L31.2 12.5227L34 9.72266L48 23.7227L34 37.7227Z"
                    fill="#0F345A"
                  />
                </svg>
              </button>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default BiosimilarityComparison;
