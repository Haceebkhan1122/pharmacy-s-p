"use client";

import React, { useState, useEffect } from "react";
import styles from "./tirzeePenBannerSection.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";

const TirzeePenBannerSection = ({ widgetData }) => {

  const pathname = usePathname();
  const locale = pathname?.startsWith?.("/ur") ? "ur" : "en";

  const [selectedDosage, setSelectedDosage] = useState(widgetData?.data?.[0]?.card_1_head);
  const [imageLoaded, setImageLoaded] = useState(false);

  const dosages = [
    { value: widgetData?.data?.[0]?.card_1_head, label: widgetData?.data?.[0]?.card_1_head },
    { value: widgetData?.data?.[1]?.card_2_head, label: widgetData?.data?.[1]?.card_2_head },
  ];

  const descriptionText = widgetData?.data?.[0]?.heading;

  const currentSrc = widgetData?.data?.[0]?.card_1_icon;
  const currentSrc2 = widgetData?.data?.[1]?.card_1_icon;


  useEffect(() => {
    setImageLoaded(false);
  }, [selectedDosage]);

  return (
    <div
      className={`${styles.tirzeePenBanner} ${locale === "ur" ? "urdu" : ""}`}
    >
      <Container>
        <Row>
          <Col lg={12}>
            {/* Pen Image Container */}
            <div className={styles.penImageWrapper}>
              {/* key forces Next/Image to remount on src change */}
              <Image
                width={500}
                height={100}
                key={selectedDosage}
                src={selectedDosage && selectedDosage == "2mg/1.5ml" ? currentSrc : currentSrc2}
                alt="semp Pen"
                className={`${styles.penImage} ${imageLoaded ? styles.loaded : ""
                  }`}
                priority
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>

            {/* Description */}
            <p className={styles.descriptionText}>{descriptionText}</p>

            {/* Dosage Buttons */}
            <div
              className={styles.dosageButtonsWrapper}
              role="tablist"
              aria-label="Dosage options"
            >
              {dosages.map((dosage) => {
                const isSelected = selectedDosage === dosage.value;
                return (
                  <button
                    key={dosage.value}
                    onClick={() => setSelectedDosage(dosage.value)}
                    className={`${styles.dosageButton} ${isSelected ? styles.selected : ""
                      }`}
                    aria-pressed={isSelected}
                    role="tab"
                    aria-selected={isSelected}
                  >
                    {dosage.label}
                  </button>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TirzeePenBannerSection;
