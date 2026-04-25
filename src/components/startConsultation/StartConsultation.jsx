import React from "react";
import styles from "./startConsultation.module.scss";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import ctaDoctor from "../../assets/images/png/cta-doctor.png";


const StartConsultation = () => {

  return (
    <div className={styles.ctaBox}>
      <Container className="h-100">
        <Row className="h-100">
          <Col lg={12} className="mx-auto">
            <div
              className={styles.boxCta}
              role="region"
              aria-label="Call to action"
            >
              <Row className="h-100">
                <Col lg={10} className="mx-auto">
                  <Row className="h-100 align-items-center">
                    <Col lg={6} md={6} sm={12} className="">
                      <div className={styles.content}>
                        <div className={styles.textCol}>
                          <h3 className={styles.first_step}>
                            Ready to Take Control of Your Health?
                          </h3>
                          <p className={styles.subHeading} >Connect with a Sem-P specialist today</p>
                          <button
                            className={styles.first_consultation_butn}
                            type="button"
                            aria-label="Start your consultation"
                          >
                           Start your consultation
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={12}
                      className="d-none d-md-flex justify-content-end"
                    >
                      <div className={`${styles.doctorWrap}`}>
                        {/* give explicit dimensions for predictable layout */}
                        <Image
                          src={ctaDoctor}
                          alt="Doctor"
                          width={420}
                          height={420}
                          priority={false}
                          sizes="(max-width: 991px) 320px, 420px"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                          }}
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

export default StartConsultation;