import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./dietGuidance.module.scss";
import parse from "html-react-parser";

const DietGuidance = ({ widgetData }) => {
  const cardData = [
    {
      icon: widgetData?.data[0]?.card_1_icon,
      title: widgetData?.data[0]?.card_1_desc,
    },
    {
      title: widgetData?.data[1]?.card_1_desc,
      icon: widgetData?.data[1]?.card_1_icon,
    },
    {
      title: widgetData?.data[2]?.card_1_desc,
      icon: widgetData?.data[2]?.card_1_icon,
    },
    {
      title: widgetData?.data[3]?.card_1_desc,
      icon: widgetData?.data[3]?.card_1_icon,
    },
    {
      title: widgetData?.data[4]?.card_1_desc,
      icon: widgetData?.data[4]?.card_1_icon,
    },
  ];

  return (
    <div className={`${styles.DietGuidance} DietGuidance`}>
      <Container>
        <Row className="text-center mb-5">
          <Col lg={12}>
            <h3 className={styles.title}>{widgetData?.heading}</h3>
            <p className={styles.subtitle}>
              {parse(widgetData?.description) || ""}
            </p>
            {/* Keeping your original image placement */}
            <div className="my-4">
              <img
                src={widgetData?.data[0]?.image}
                alt="Dietary Illustration"
              />
            </div>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {cardData?.map((card, index) => (
            <Col lg={4} md={6} key={index}>
              <div className={styles.guidanceCard}>
                <div>
                  <img src={card.icon} alt="image" />
                </div>
                <div className={styles.cardBody}>
                  {parse(card?.title || "")}
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <button className={styles.patientDownload}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M16.5 22.0616L9.6692 15.2308L11.3556 13.4956L15.3 17.44V4H17.7V17.44L21.6444 13.4956L23.3308 15.2308L16.5 22.0616ZM7.3924 28C6.58413 28 5.9 27.72 5.34 27.16C4.78 26.6 4.5 25.9159 4.5 25.1076V20.7692H6.9V25.1076C6.9 25.2308 6.95133 25.3436 7.054 25.446C7.1564 25.5487 7.2692 25.6 7.3924 25.6H25.6076C25.7308 25.6 25.8436 25.5487 25.946 25.446C26.0487 25.3436 26.1 25.2308 26.1 25.1076V20.7692H28.5V25.1076C28.5 25.9159 28.22 26.6 27.66 27.16C27.1 27.72 26.4159 28 25.6076 28H7.3924Z"
                  fill="currentColor"
                />
              </svg>
              Download Patient Toolkit
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DietGuidance;
