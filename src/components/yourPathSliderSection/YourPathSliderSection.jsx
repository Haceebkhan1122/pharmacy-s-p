"use client";

import React, { useState, useEffect } from "react";
import styles from "./yourPathSliderSection.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Step1 from "../../assets/images/png/semp21.png";
import Step2 from "../../assets/images/png/semp21.png";
import Step3 from "../../assets/images/png/semp21.png";
import Step4 from "../../assets/images/png/semp21.png";

const YourPathSliderSection = ({ data }) => {
  const pathname = usePathname();
  const locale = pathname?.startsWith?.("/ur") ? "ur" : "en";

  const [selectedDosage, setSelectedDosage] = useState("Step 1");
  const [imageLoaded, setImageLoaded] = useState(false);

  const dosages = [
    { title: "Step 1", desc: 'Check the pen', img: Step1 },
    { title: "Step 2", desc: 'Choose your injection site', img: Step2 },
    { title: "Step 3", desc: 'Remove the pen cap', img: Step3 },
    { title: "Step 4", desc: 'Inject your dose', img: Step4 },
  ];

  // Map dosage to image path in /public/images/
  const penImages = {
    "step 1": Step1,
    "step 2": Step2,
    "step 3": Step3,
    "step 4": Step4,
  };


  // reset imageLoaded when dosage changes to trigger fade animation
  useEffect(() => {
    setImageLoaded(false);
  }, [selectedDosage]);

  return (
    <div
      className={`${styles.tirzeePenBanner} ${locale === "ur" ? "urdu" : ""}`}
    >
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.headingg}>
              <h1>Your Path to Sustainable Weight Loss</h1>
              <p>Simple steps, expert support, lasting results</p>
            </div>
          </Col>
          <Col lg={6} md={6}>
            {/* Pen Image Container */}
            <div className={styles.penImageWrapper}>
              {/* key forces Next/Image to remount on src change */}
              <Image
                key={selectedDosage}
                src={
                  penImages[selectedDosage.toLowerCase()] // ← CORRECT image mapping
                }
                alt="Tirzee Pen"
                className={`${styles.penImage} ${imageLoaded ? styles.loaded : ""
                  }`}
                priority
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>

          </Col>
          <Col lg={6} md={6}>
          <div className={styles.contentWrapper}>
            <div className={styles.penImageWrapperRight}>

              {selectedDosage === "Step 1" && (
                <>
              <ul>
                <li>Check the label to make sure you have the correct medicine and dose.</li>
                <li>Confirm the expiry date and ensure the pen is not damaged.</li>
              </ul>
              <h3>The medicine should:</h3>
              <ul>
                <li>Not be frozen</li>
                <li>Be clear </li>
                <li>Not be cloudy </li>
                <li>Not contain any particles </li>
              </ul>
              </>
              )}

             {selectedDosage === "Step 2" && (
                <>
                <span>Tirzee can be injected under the skin (subcutaneously) in one of these areas</span>
                <div className="my-3 my-md-5">
              <ul>
                <li>Stomach (abdomen)</li>
                <li>Thighs </li>
                <li>Back of the upper arm (with assistance) </li>
              </ul>
                </div>
                <span>Rotate your injection site each week</span>
              </>
              )}

             {selectedDosage === "Step 3" && (
              <ul>
                <li>Pull the pen cap straight off the pen.</li>
                <li>The needle is not visible, so you won’t see or handle it directly.</li>
                <li>Be careful not to press the uncapped needle to avoid accidental needle prick.</li>
              </ul>
              )}

              {selectedDosage === "Step 4" && (
                <>
              <ul>
                <li>Press the pen firmly against your skin and keep steady pressure.</li>
                <li>You will hear two clicks during the injection:</li>
              <ul className={styles.innerUl}>
                <li>First click: your dose has started.</li>
                <li>Second click: the medicine is still being injected (it’s not done yet)</li>
              </ul>
                <li>Continue holding the pen in place for 10 seconds after the second click to ensure the full dose is delivered.</li>
                <li>After the dose is completed, dispose of the used pen safely.</li>
              </ul>
              </>
              )}

            </div>
          </div>
          </Col>

          <Col lg={12}>
            {/* Dosage Buttons */}
            <div
              className={styles.dosageButtonsWrapper}
              role="tablist"
              aria-label="Dosage options"
            >
              {dosages?.map((dosage) => {
                const isSelected = selectedDosage === dosage.title;
                return (
                  <button
                    key={dosage.title}
                    onClick={() => setSelectedDosage(dosage.title)}
                    className={`${styles.dosageButton} ${isSelected ? styles.selected : ""
                      }`}
                    aria-pressed={isSelected}
                    role="tab"
                    aria-selected={isSelected}
                  >
                    <h4>{dosage.title}</h4>
                    <h5>{dosage.desc}</h5>
                  </button>
                );
              })}
            </div>
          </Col>
          <Col md={12}>
            <div className={styles.arrowNav}>
              {/* LEFT ARROW */}
              <button
                className={styles.arrowBtn}
                onClick={() => {
                  const currentIndex = dosages.findIndex(
                    (d) => d.title === selectedDosage
                  );
                  const prevIndex = (currentIndex - 1 + dosages.length) % dosages.length;
                  setSelectedDosage(dosages[prevIndex].title);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M19.0013 25.3145L26.668 17.6478L24.3346 15.3145L14.3346 25.3145L24.3346 35.3145L26.668 32.9811L19.0013 25.3145Z" fill="#78A941" />
                </svg>
              </button>

              {/* RIGHT ARROW */}
              {/* DOTS NAVIGATION */}
              <div className={styles.dotsWrapper}>
                {dosages.map((item, index) => {
                  const isActive = selectedDosage === item.title;
                  return (
                    <span
                      key={index}
                      className={`${styles.dot} ${isActive ? styles.activeDot : ""}`}
                      onClick={() => setSelectedDosage(item.title)}
                    ></span>
                  );
                })}
              </div>
              <button
                className={styles.arrowBtn}
                onClick={() => {
                  const currentIndex = dosages.findIndex(
                    (d) => d.title === selectedDosage
                  );
                  const nextIndex = (currentIndex + 1) % dosages.length;
                  setSelectedDosage(dosages[nextIndex].title);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20.9987 25.3145L13.332 17.6478L15.6654 15.3145L25.6654 25.3145L15.6654 35.3145L13.332 32.9811L20.9987 25.3145Z" fill="#78A941" />
                </svg>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YourPathSliderSection;
