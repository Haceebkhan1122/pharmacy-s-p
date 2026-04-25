"use client";

import Image from "next/image";
import styles from "./onceWeekly.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import OnceWeeklyImage from "../../assets/images/svg/onceWeekly.svg";
import parse from "html-react-parser";

export default function Page({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <main className="flex-1 flex justify-center p-6" id="stories">
        <section className="">
          <div className={styles.outerFrameSemP}>
            <Container className={styles.containerSemP}>
              <Row className="mx-auto justify-content-between">
                <Col lg={6} sm={6} md={6} xs={12} className={`${styles.cardContainerSemP} my-auto`}>
                  {/* RIGHT: white card with form */}
                  <article className={styles.cardSemP}>
                    <p className={styles.cardTitleSemP}>
                      {data?.HomePage?.semp_once}
                    </p>
                    <p className={styles.cardDescriptionSemP}>
                      {data?.HomePage?.semp_first_desc}
                    </p>
                    <p className={styles.cardFooterSemP}>
                      {parse(data?.HomePage?.semp_second_desc)}
                    </p>
                    <p className={styles.cardFooterSemP}>
                      {parse(data?.HomePage?.semp_third_desc)}
                    </p>
                    <p className={styles.cardFooterSemP}>
                      {parse(data?.HomePage?.semp_fourth_desc)}
                    </p>
                  </article>
                </Col>
                <Col lg={5} sm={6} md={6}>
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
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </div>
  );
}
