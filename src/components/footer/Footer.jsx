"use client";
import React, { useEffect, useState } from "react";
import styles from "./footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import SempLogo from "../.././assets/images/svg/semp-footer.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Footer() {
  const ConsultNowUrl = process.env.NEXT_PUBLIC_CONSULT_NOW_URL;
  const [consultUrl, setConsultUrl] = useState(ConsultNowUrl);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setConsultUrl(ConsultNowUrl);
  }, []);

  const router = useRouter();

  const handleStart = () => {
    // navigation via setting location (keeps current behavior)
    window.location.href = consultUrl;
  };
  useEffect(() => {
    // Detect domain (SSR safe)
    if (typeof window !== "undefined") {
      setIsMobileDevice(window.innerWidth <= 767);
    }
  }, []);
  return (
    <>
      <div className={`${styles.footerBox} `}>
        <Container>
          <Row>
                <div className={styles.socialIconContainer}>
                  <div className={styles.imgWr}>
                  <Image
                    src={SempLogo}
                    alt="health fitness logo"
                    className={styles.logoImage}
                  />
                  </div>
                  <div className={styles.wrapeee}>
                    <div className={styles.uanContainer}>
                      <span className={styles.phoneIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M25.9204 27.3337C23.4077 27.3337 20.8834 26.7494 18.3474 25.581C15.8116 24.4125 13.4796 22.7643 11.3514 20.6363C9.2318 18.5081 7.5878 16.1781 6.41935 13.6463C5.25091 11.1148 4.66669 8.59266 4.66669 6.07999C4.66669 5.67999 4.80002 5.34444 5.06669 5.07333C5.33335 4.80244 5.66669 4.66699 6.06669 4.66699H10.4154C10.752 4.66699 11.049 4.77688 11.3064 4.99666C11.5637 5.21621 11.7274 5.48755 11.7974 5.81066L12.5617 9.73366C12.6146 10.0977 12.6035 10.4104 12.5284 10.672C12.453 10.9335 12.3179 11.1532 12.123 11.331L9.04369 14.3287C9.53924 15.2362 10.1055 16.0948 10.7424 16.9043C11.379 17.7137 12.0684 18.4867 12.8104 19.2233C13.5419 19.9551 14.3197 20.6347 15.1437 21.262C15.9677 21.8893 16.8575 22.4731 17.813 23.0133L20.805 19.9953C21.0137 19.7782 21.2664 19.626 21.563 19.5387C21.8595 19.4515 22.1676 19.4302 22.4874 19.4747L26.1897 20.2287C26.5264 20.3175 26.8011 20.4893 27.014 20.744C27.2269 20.9987 27.3334 21.2875 27.3334 21.6107V25.9337C27.3334 26.3337 27.1979 26.667 26.927 26.9337C26.6559 27.2003 26.3204 27.3337 25.9204 27.3337Z"
                            fill="white"
                          />
                        </svg>
                      </span>

                      <p
                        className={styles.uanNumber}
                        onClick={() => (window.location.href = "tel:+9221111455455")}
                        style={{ cursor: "pointer" }}
                      >
                        Helpline: 021 111 455 455
                      </p>
                    </div>
                  </div>
                </div>
          </Row>
          <div className={styles.topStrip} />

          <div className={styles.inner}>
            <Row className="align-items-start">
              {/* Left: 4 columns (lists) */}
              <Col lg={12} md={12}>
                <Row className={styles.linksRow}>
                  <Col xs={6} md={3} className={styles.linkCol}>
                    <h5 className={styles.title}>Quick Links</h5>
                    <ul>
                      <li>
                        <a
                          href="/"
                        >
                          About Sem-P
                        </a>
                      </li>
                      <li>
                        <a
                          href="/mechanism-action"
                        >
                         Mechanism of Action
                        </a>
                      </li>
                      <li>
                        <a
                          href="/proven-result"
                        >
                         Proven Results
                        </a>
                      </li>
                    </ul>
                  </Col>

                  <Col xs={6} md={3} className={styles.linkCol}>
                    <h5 className={styles.title}>Video</h5>
                    <ul>
                      <li>
                        <a href="/video-library">Video Library</a>
                      </li>
                    </ul>
                  </Col>

                  <Col xs={6} md={3} className={styles.linkCol}>
                    <h5 className={styles.title}>Research Studies</h5>
                    <ul>
                      <li>
                        <a href="/research-papers">Research Papers</a>
                      </li>
                    </ul>
                  </Col>

                  <Col xs={6} md={3} className={styles.linkCol}>
                    <h5 className={styles.title}>Other Links </h5>
                    <ul>
                      <li>
                        <a href="/prescribing-information">Prescribing Information</a>
                      </li>
                      <li>
                        <a href="/patient-toolkit">
                          Patient Tool Kit
                        </a>
                      </li>
                      <li>
                        <a href="/blogs">
                          Blogs 
                        </a>
                      </li>
                    </ul>
                  </Col>

                </Row>
              </Col>

            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
