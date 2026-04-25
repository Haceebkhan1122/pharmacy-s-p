"use client";

import React, { useEffect, useState } from "react";
import styles from "./cta.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ctaDoctor from "../../../assets/images/svg/cta-doctor.png";
import parse from "html-react-parser";

const PROD_URL = "https://consult.health-fitness.pk/booking-confirmed";
const STAGING_URL =
  "https://staging-consult.health-fitness.pk/booking-confirmed";

const detectStagingHost = (hostname = "") => {
  const h = hostname.toLowerCase();
  return h.includes("staging") || h.includes("staging-");
};

const Cta = ({ widgetData }) => {
  const [consultUrl, setConsultUrl] = useState(PROD_URL);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname || "";
    if (detectStagingHost(host)) {
      setConsultUrl(STAGING_URL);
    } else {
      setConsultUrl(PROD_URL);
    }
  }, []);

  const handleStart = () => {
    // navigation via setting location (keeps current behavior)
    window.location.href = consultUrl;
  };

  return (
    <div className={styles.ctaBox}>
      <Container>
        <Row>
          <Col lg={12} className="mx-auto">
            <div
              className={styles.boxCta}
              role="region"
              aria-label="Call to action"
            >
              <Row>
                <Col lg={10} className="mx-auto">
                  <Row>
                    <Col lg={6}>
                      <div className={styles.content}>
                        <div className={styles.textCol}>
                          <h2 className={styles.first_step}>
                            {widgetData && parse(widgetData?.heading)}
                          </h2>
                          <br />
                          <button
                            onClick={handleStart}
                            className={styles.first_consultation_butn}
                            type="button"
                            aria-label="Start your consultation"
                          >
                            {widgetData &&
                              parse(widgetData?.data[0]?.button_text)}{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M23.8768 15.9982L14.9375 7.05882L17.0588 4.9375L28.1194 15.9982L17.0588 27.0588L14.9375 24.9376L23.8768 15.9982Z"
                                  fill="#1A1A1A"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M26 17.5H2V14.5H26V17.5Z"
                                  fill="#1A1A1A"
                                />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={`${styles.doctorWrap} d-lg-block d-none`}>
                        <Image
                          src={widgetData?.data[0]?.image}
                          alt="Doctor"
                          width={426}
                          height={357}
                          priority
                          style={{ height: "100%", width: "auto" }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cta;
