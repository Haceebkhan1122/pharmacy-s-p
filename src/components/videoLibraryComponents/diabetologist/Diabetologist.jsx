"use client";

import React, { useState } from "react";
import styles from "./diabetologist.module.scss";
import Image from "next/image";
import { Col, Container, Row, Button } from "react-bootstrap";
import playButton from "../../../assets/images/svg/youtubeIcon.svg";
import VideoModal from "../videomodal/videomodal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DiabetologistOne from "../../../assets/images/png/diabetologistOne.png";
import DiabetologisTwo from "../../../assets/images/png/diabetologistTwo.png";
import DiabetologistThree from "../../../assets/images/png/diabetologistThree.png";


const Diabetologist = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const doctorsData = [
    {
      name: "Dr. Rehan Omer",
      designation: "Cardiologist",
      videoId: "Cf5PbT5SXjg",
      image: DiabetologistOne?.src,
    },
    {
      name: "Dr. Syeda Urooj Riaz",
      designation: "Diabetologist",
      videoId: "oFVOvtRbJ6w",
      image: DiabetologisTwo?.src,
    },
    {
      name: "Dr. Muhammad Hashim",
      designation: "Diabetologist",
      videoId: "d80kllF3gWo",
      image: DiabetologistThree?.src,
    },
    {
      name: "Dr. Muhammad Hashim",
      designation: "Diabetologist",
      videoId: "d80kllF3gWo",
      image: DiabetologistThree?.src,
    },

  ];

  return (
    <div className={`${styles.diabetologist}`}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={12} className={`${styles.diabetologistImagesContainer}`}>
            <Row>
              <div className={styles.header}>
               <Col lg={8} >
                  <h3 className={styles.title}>
                    Understanding analytical and clinical equivalence
                  </h3>
                </Col>
              </div>
              <div className={styles.swiperWrap}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  slidesPerView={3}
                  navigation={{
                    nextEl: `.${styles.nextArrow}`,
                    prevEl: `.${styles.prevArrow}`,
                  }}
                  pagination={{
                    el: `.${styles.customPagination}`,
                    clickable: true,
                    renderBullet: (index, className) =>
                      `<span class="${className}"></span>`,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className={styles.swiper}
                >
                  {doctorsData?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={styles.diabetologistCard}
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                        onClick={() => {
                          setVideoId(item.videoId);
                          setOpen(true);
                        }}
                      >
                        <h5>{item.name}</h5>
                        <span>{item.designation}</span>
                        <span className={styles.youtIco}>
                          <Image src={playButton} alt="icon" />
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* bottom arrows + pagination */}
                <div className={styles.controlsRow}>
                  <button className={styles.prevArrow}>❮</button>
                  <div className={styles.customPagination}></div>
                  <button className={styles.nextArrow}>❯</button>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <VideoModal
        isOpen={open}
        onClose={() => setOpen(false)}
        videoId={videoId}
      />
    </div>
  );
};

export default Diabetologist;
