"use client";

import Image from "next/image";
import styles from "./onceWeekly.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import parse from "html-react-parser";

export default function Page({ widgetData }) {

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
                      {widgetData?.heading && parse(widgetData?.heading)}
                    </p>
                    <p className={styles.cardFooterSemP}>
                      {widgetData?.data?.[0]?.sub_head}
                    </p>
                    <p className={styles.cardDescriptionSemP}>
                      {widgetData?.description && parse(widgetData?.description)}
                    </p>
                  </article>
                </Col>
                <Col lg={5} sm={6} md={6}>
                  <aside className={styles.leftSemP}>
                    <div className={styles.leftInnerSemP}>
                      <div className={styles.imageMaskSemP}>
                        <Image
                          src={widgetData?.data?.[0]?.image && widgetData?.data?.[0]?.image}
                          alt="Person"
                          className="object-contain"
                          priority
                          width={510}
                          height={610}
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
