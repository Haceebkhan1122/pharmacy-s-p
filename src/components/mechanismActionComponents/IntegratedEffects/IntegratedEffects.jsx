"use client";

import React, { useEffect, useState } from "react";
import styles from "./integratedEffects.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import parse from "html-react-parser";

const IntegratedEffects = ({ widgetData }) => {
  const pathname = usePathname();
  const locale = pathname?.startsWith?.("/ur") ? "ur" : "en";

  const [selectedIndex, setSelectedIndex] = useState(0);
 const [imageLoaded, setImageLoaded] = useState(true);

  const dosages = widgetData?.data?.map((item, index) => ({
    title: `Step ${index + 1}`,
    desc: item.heading,
    icon: item.card_1_icon,
    content: item.card_1_desc,
    image: item.image,
  }));

const [isFirstRender, setIsFirstRender] = useState(true);

useEffect(() => {
  if (isFirstRender) {
    setIsFirstRender(false);
    return;
  }
  setImageLoaded(false);
}, [selectedIndex]);
  if (!widgetData?.data?.length) return null;

  return (
    <div
      className={`${styles.integratedEffects} ${locale === "ur" ? "urdu" : ""}`}
    >
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.headingg}>
              <h1>{widgetData && widgetData?.heading}</h1>
            </div>
          </Col>

          <Col lg={12}>
            {/* Dosage Buttons */}
            <div
              className={styles.dosageButtonsWrapper}
              role="tablist"
              aria-label="Dosage options"
            >
              {dosages?.map((dosage, index) => {
                const isSelected = selectedIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`${styles.dosageButton} ${isSelected ? styles.selected : ""}`}
                  >
                    <img
                      src={dosage?.image}
                      alt="icon"
                    />
                    <h5>{dosage?.desc}</h5>
                  </button>
                );
              })}
            </div>
          </Col>

          <Col lg={6} md={6}>
            {/* Pen Image Container */}
            <div className={styles.penImageWrapper}>
              {/* key forces Next/Image to remount on src change */}
              <Image
                src={dosages[selectedIndex]?.icon}
                alt="Tirzee Pen"
                className={`${styles.penImage} ${
                  imageLoaded ? styles.loaded : ""
                }`}
                priority
                width={630}
                height={438}
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className={styles.contentWrapper}>
              <div className={styles.penImageWrapperRight}>
               {parse(dosages[selectedIndex]?.content || "")}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntegratedEffects;
