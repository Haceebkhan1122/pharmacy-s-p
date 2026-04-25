import React from "react";
import styles from "./storageCondition.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import sempMedinice from "../../../assets/images/svg/sempMedinice.svg";
import parse from "html-react-parser";

const StorageConditionProven = ({widgetData}) => {

  return (
    <div className={`${styles.storage}`}>
      <Container>
        <div className={`${styles.storageWrap}`}>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={widgetData && widgetData?.data[0]?.image} alt="sem-p Medinice" />
            </Col>
            <Col md={6}>
              {widgetData && parse(widgetData?.description)}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default StorageConditionProven;
