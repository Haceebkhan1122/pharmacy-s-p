"use client";

import React, { useState, useEffect } from "react";
import styles from "./tirzeePenBannerSection.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import OrangePen from "../../assets/images/png/redPen.png";
import BluePen from "../../assets/images/png/greenPen.png";

const TirzeePenBannerSection = ({ data }) => {
  const pathname = usePathname();
  const locale = pathname?.startsWith?.("/ur") ? "ur" : "en";

  const [selectedDosage, setSelectedDosage] = useState("5 mg");
  const [imageLoaded, setImageLoaded] = useState(false);

  const dosages = [
    { value: "2.5 mg", label: locale === "ur" ? "۲.۵ ملی گرام" : "2mg/1.5ml" },
    { value: "5 mg", label: locale === "ur" ? "۵ ملی گرام" : " 4mg/3ml" },
  ];

  const descriptionText =
    locale === "ur"
      ? "ٹرزی آٹو انجیکٹر قلم متعدد طاقتوں میں آتا ہے"
      : "SEM-P is available in two strengths, in both pre-filled pen and vial forms.";

  const additionalInfoText =
    locale === "ur"
      ? "اپنے ڈاکٹر سے مشورہ کریں کہ آپ کے لیے کون سی خوراک صحیح ہے"
      : "SEM-P is available in two strengths, in both pre-filled pen and vial forms.";

  const penImages = {
    "2.5 mg": OrangePen,
    "5 mg": BluePen,
  };

  const currentSrc = penImages[selectedDosage] || penImages["5 mg"];

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
                key={selectedDosage}
                src={currentSrc}
                alt="semp Pen"
                className={`${styles.penImage} ${
                  imageLoaded ? styles.loaded : ""
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
                    className={`${styles.dosageButton} ${
                      isSelected ? styles.selected : ""
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
