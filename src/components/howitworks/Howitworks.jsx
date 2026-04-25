"use client"

import React from "react";
import styles from "./howitworks.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import HowitWorks1 from "../../assets/images/svg/howitworks1.jpg";
import HowitWorksNew from "../../assets/images/png/sempInjectionBanner.png";
import HowitWorksNew1 from "../../assets/images/svg/sempInjectionBanner1.svg";
import HowitWorks2 from "../../assets/images/svg/howitworks2.png";
import HowitWorks3 from "../../assets/images/svg/howitworks3.png";
import howitworksUrdu from "../../assets/images/svg/howitworksUrdu.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { isMobile } from 'react-device-detect';
import parse from "html-react-parser";

const steps = [
  {
    id: 1,
    title: "Consult a doctor",
    desc: "Consult with a doctor to find out which medication is right for you",
  },
  {
    id: 2,
    title: "Get prescribed",
    desc: "If appropriate, get your prescription and a treatment plan",
  },
  {
    id: 3,
    title: "Start treatment",
    desc: "Begin your plan and track progress with support and follow-ups",
  },
];


const Howitworks = ({ data }) => {


  const pathname = usePathname();
  const locale = pathname.startsWith("/ur") ? "ur" : "en";

  return (
    <div className={`${styles.howitworks}`} id="results">
      <div>
        <Row>
          <Col lg={12}>
            <div className={styles.topImageWrap}>
              <div className={styles.topImageInner}>
                {locale == 'ur' ? (
                  <Image
                    src={howitworksUrdu}
                    alt="Top decorative"
                    className={styles.topImage}
                    priority
                    quality={70 - 85}
                  />
                ) : (
                  <>
                    {!isMobile ?
                      (<Image
                        src={HowitWorksNew}
                        alt="Top decorative"
                        className={styles.topImage}
                        loading="lazy"
                        quality={75}
                      />) :
                      (<Image
                        src={HowitWorksNew1}
                        alt="Top decorative"
                        className={styles.topImage}
                        loading="lazy"
                        quality={75}
                      />)}
                  </>
                )}

              </div>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col lg={6} className="pe-0 d-lg-block d-none">
            <div className={styles.bottomImageWrap}>
              <div className={styles.bottomImageInner}>
                <Image
                  src={HowitWorks2}
                  alt="Top decorative"
                  className={styles.bottomImage}
                  priority

                />
              </div>
            </div>
          </Col>
          <Col lg={6} className="ps-0">
            <div className={styles.bottomImageWrap}>
              <div className={styles.bottomImageInner}>
                <Image
                  src={HowitWorks3}
                  alt="Top decorative"
                  className={styles.bottomImage}
                  priority

                />

                <div className={styles.contentOverlay}>
                  <h1 className={styles.contentTitleSemp}>
                    {data?.HomePage?.how_semp_works}
                  </h1>
                  <p className={styles.contentSubtitle}>
                    {parse(data?.HomePage?.semp_three_ways)}
                  </p>

                  <div className={styles.stepBox}>
                    <div className={styles.stepNumber}>1</div>
                    <p className={styles.stepContent}>
                      {parse(data?.HomePage?.first_way)}
                    </p>
                  </div>

                  <div className={styles.stepBox}>
                    <div className={styles.stepNumber}>2</div>
                    <p className={styles.stepContent}>
                      {parse(data?.HomePage?.second_way)}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </Col>
        </Row> */}
      </div>
    </div>
  );
};

export default Howitworks;
