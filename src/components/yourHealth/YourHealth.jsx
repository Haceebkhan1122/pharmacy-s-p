"use client";

import Image from "next/image";
import styles from "./yourHealth.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import OnceWeeklyImage from "../../assets/images/svg/your_health_doc.svg";


export default function Page({ data }) {

  return (
    <div>
      <main className="flex-1 flex justify-center p-6" id="yourHealth">
        <section className="">
          <div className={styles.outerFrameSemPP}>
            <Container className={styles.containerSemP}>
              <Row className="mx-auto justify-content-between">
                <Col lg={6} sm={6} md={6}>
                  <aside className={styles.leftSemP}>
                    <div className={styles.leftInnerSemP}>
                      <div className={styles.imageMaskSemP}>
                        <Image
                          src={OnceWeeklyImage}
                          alt="Person"
                          className="object-contain"
                          priority
                          quality={70 - 85}
                        />
                      </div>
                    </div>
                  </aside>
                </Col>
                <Col lg={5} sm={5} md={5} xs={12} className={`${styles.cardContainerSemP} my-auto`}>
                  <article className={styles.cardSemP}>
                    <h3>Your health, your schedule, your choice.</h3>
                    <p className={styles.cardTitleSemP}>
                      {data?.HomePage?.semp_once}
                    </p>
                    <div className="d-flex align-items-center">
                      <button className={styles.buttonIpersonCare}>In-Person Care</button>
                      <button className={`${styles.buttonIpersonCare} telehealth`}>Telehealth</button>
                    </div>
                  </article>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </div>
  );
}
