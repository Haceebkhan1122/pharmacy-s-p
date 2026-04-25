"use client";
import React, { useEffect, useState } from "react";
import styles from "./banner.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";

function Banner({ widgetData }) {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.querySelector('#whatissemp');
    if (!triggerElement) return;

      const triggerPoint = triggerElement.offsetTop;
      const scrollY = window.scrollY + window.innerHeight / 3;
      setShowButtons(scrollY >= triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
     style={{
        transition: "background-image 0.1s ease-in-out",
         backgroundImage:`url(${ widgetData?.data[0]?.image})`,

      }}
       className={`${styles.mainWrapperBanner}`}>
      <Container fluid className="h-100 p-0">
        <Col lg={12}>
            <Row className="h-100">
            <Col lg={5} md={4} className="d-none d-md-block"></Col>
            <Col lg={6} className="ms-auto" sm={6} md={6} xs={12} >
              <div className={styles.box_banner_bottom}>
                <p className={`${styles.banner_title}`}>
                {widgetData && parse(widgetData?.heading)}
                </p>
                <p className={`${styles.banner_description}`}>
              {widgetData && parse(widgetData?.description)}
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
      <div className={`${styles.wraper_arrow_top} ${showButtons ? styles.showBtnArrow : ""} `} onClick={() => window.scrollTo(0, 0)}>
        <span className={styles.arrowUpSvg}></span>
      </div>
    </>
  );
}

export default Banner;
