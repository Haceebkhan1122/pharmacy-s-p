"use client";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./healthCondition.module.scss";
import Image from "next/image";

const DiseaseSlider = ({ widgetData }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  // 1. Extract dynamic data from props
  const { heading, description, data: slides = [] } = widgetData || {};

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (slides.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (slides.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const isMobile = width < 768;

  const getSlideWidth = (index) => {
    if (isMobile) return 100;
    return index === activeIndex ? 40 : 30;
  };

  let translateX;
  if (isMobile) {
    translateX = -100 * activeIndex;
  } else {
    translateX = 30 - 30 * activeIndex;
  }

  useEffect(() => {
    if (!isMobile || slides.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, slides.length]);

  // Handle empty state
  if (!widgetData || slides.length === 0) return null;

  return (
    <section className={styles.diseaseSection}>
      <Container fluid="md">
        <Row className="justify-content-center">
          <Col md={12} className={styles.sectionHeader}>
            {/* 2. Dynamic Section Heading */}
            <h3>{heading}</h3>
            {/* Optional: Render description if needed */}
            {description && (
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
          </Col>
        </Row>

        <div className={styles.carouselContainer} ref={containerRef}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(${translateX}%)`,
            }}
          >
            {/* 3. Map through API data */}
            {slides.map((slide, index) => (
              <div
                key={slide.id || index}
                className={`${styles.carouselSlide} ${index === activeIndex ? styles.active : ""
                  }`}
                style={{ width: `${getSlideWidth(index)}%` }}
                onClick={() => goToSlide(index)}
              >
                <div className={styles.diseaseCard}>
                  <Image
                    src={slide.image} // Dynamic URL from S3
                    alt={slide.heading}
                    style={{ objectFit: "contain" }}
                    fill={false}
                    width={500} // Adjust based on your CSS
                    height={400} // Adjust based on your CSS
                    loading={index === activeIndex ? "eager" : "lazy"}
                    priority={index === activeIndex}
                    sizes="(max-width: 767px) 90vw, 40vw"
                  />
                  {/* 4. Dynamic Slide Titles (e.g., Nausea, Diarrhea) */}
                  <div className={styles.cardContent}>
                    <h3>{slide.heading}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controlsContainer}>
          <button className={styles.controlBtn} onClick={prevSlide}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M19.0013 20L26.668 12.3333L24.3346 10L14.3346 20L24.3346 30L26.668 27.6667L19.0013 20Z" fill="#2A3440" />
            </svg>
          </button>

          <div className={styles.dotsContainer}>
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dot} ${idx === activeIndex ? styles.active : ""
                  }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>

          <button className={styles.controlBtn} onClick={nextSlide}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20.9987 20L13.332 12.3333L15.6654 10L25.6654 20L15.6654 30L13.332 27.6667L20.9987 20Z" fill="#2A3440" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default DiseaseSlider;