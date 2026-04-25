"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./patientProfiles.module.scss";

const PatientSlider = ({ widgetData }) => {
  const [viewMode, setViewMode] = useState("profile");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const swiperRef = useRef(null);

  const patients = useMemo(() => {
    return widgetData?.data?.map((item, index) => ({
      id: item.id || index,
      label: item.heading,
      thumbImage: item.image,
      profileImage: item.card_1_icon,
      clinicalImage: item.card_2_icon,
      card1Head: item.card_1_head,
      card2Head: item.card_2_head,
    })) || [];
  }, [widgetData]);

  const current = patients[selectedIdx] || patients[0];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(selectedIdx);
    }
  }, [selectedIdx]);

  if (!patients.length) return null;

  return (
    <section className={styles.patientSection}>
      <Container>

        {/* 🟢 Slider */}
        <div className={styles.thumbWrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(s) => (swiperRef.current = s)}
            navigation={{
              nextEl: `.${styles.nextArrow}`,
              prevEl: `.${styles.prevArrow}`,
            }}
            pagination={{
              el: `.${styles.customPagination}`,
              clickable: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            onSlideChange={(s) => setSelectedIdx(s.activeIndex)}
          >
            {patients.map((p, idx) => (
              <SwiperSlide key={p.id}>
                <div
                  className={`${styles.thumb} ${
                    selectedIdx === idx ? styles.activeThumb : ""
                  }`}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <div className={styles.thumbImg}>
                    <Image
                      src={p.thumbImage}
                      alt={p.label}
                      width={100}
                      height={100}
                    />
                  </div>
                  <p>{p.label}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className={styles.controlsRow}>
            <button className={styles.prevArrow}>❮</button>
            <div className={styles.customPagination} />
            <button className={styles.nextArrow}>❯</button>
          </div>
        </div>

            
        {/* 🟢 Toggle */}
        <div className={styles.toggleWrapper}>
          <div className={styles.pill}>
            <button
              className={viewMode === "profile" ? styles.active : ""}
              onClick={() => setViewMode("profile")}
            >
              {current?.card1Head || "Profile"}
            </button>

            <button
              className={viewMode === "clinical" ? styles.active : ""}
              onClick={() => setViewMode("clinical")}
            >
              {current?.card2Head || "Clinical"}
            </button>
          </div>
        </div>


        {/* 🟢 Main Display */}
        <div className={styles.displayCard}>

          {viewMode === "profile" ? (
            <img
              src={current?.profileImage}
              alt="profile"
              className={styles.clinicalImg}
              // width={1290}
              // height={698}
            />
          ) : (
            <img
              src={current?.clinicalImage}
              alt="clinical"
              className={styles.clinicalImg}
              // width={1290}
              // height={698}
            />
          )}

        </div>

      </Container>
    </section>
  );
};

export default PatientSlider;