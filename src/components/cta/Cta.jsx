"use client";

import React, { useEffect, useState } from "react";
import styles from "./cta.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import bannerCta from "../../assets/images/svg/bannerCta.svg"
// Use file imports (images placed in /assets/images/...)
// Replace paths with your actual files
import ctaBackground from "../../assets/images/svg/ctaBackground.svg";
import ctaDoctor from "../../assets/images/svg/cta-doctor.png";

const PROD_URL = "https://consult.health-fitness.pk/booking-confirmed";
const STAGING_URL = "https://staging-consult.health-fitness.pk/booking-confirmed";

const detectStagingHost = (hostname = "") => {
  const h = hostname.toLowerCase();
  return (
    h.includes("staging") ||
    h.includes("staging-")
  );
};

const Cta = ({ data }) => {
  //   const handleClick = () => {
  //   // external URL
  //   window.location.href = "https://consult.health-fitness.pk/booking-confirmed";
  //   // Or window.open(url, "_blank") if you want a new tab
  // };
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
            <div className={styles.boxCta} role="region" aria-label="Call to action">
              <Row>
                <Col lg={10} className="mx-auto">
                  <Row>
                    <Col lg={6}>
                      <div className={styles.content}>
                        <div className={styles.textCol}>
                          <h2 className={styles.first_step}>{data?.HomePage?.first_step}</h2>
                          <p> {data?.HomePage?.first_step_para} </p>
                          <button onClick={handleStart} className={styles.first_consultation_butn} type="button" aria-label="Start your consultation" >
                            {data?.HomePage?.first_consultation}
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className={`${styles.doctorWrap} d-lg-block d-none`}>
                        {/* give explicit dimensions for predictable layout */}
                        <Image
                          src={ctaDoctor}
                          alt="Doctor"
                          width={420}
                          height={420}
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
