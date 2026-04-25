"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./BannerObesity.module.scss";
import { Col, Container, Row } from "react-bootstrap";


function BannerObesity(props) {

  return (
    <>
      <div className={`${styles.mainWrapperBanner}`} style={{ backgroundImage: `url(${props.bannerObesity?.src})` }}>
        <Container fluid className="h-100 p-0">
          <Col lg={12}>
            <Row className="h-100">
              <Col lg={5} md={4} className="d-none d-md-block"></Col>
              <Col lg={6} className="ms-auto" sm={6} md={6} xs={12} >
                <div className={styles.box_banner_bottom}>
                  <p className={`${styles.banner_title}`}>
                    {props?.heading}
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default BannerObesity;
