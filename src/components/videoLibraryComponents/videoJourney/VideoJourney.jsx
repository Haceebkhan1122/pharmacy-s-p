"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./videoJourney.module.scss";
import parse from "html-react-parser";
import Image from "next/image";

const getEmbedUrl = (url) => {
  if (!url) return "";
  if (url.includes("youtu.be")) {
    const id = url.split("/").pop();
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("youtube.com")) {
    const urlObj = new URL(url);
    const id = urlObj.searchParams.get("v");
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};

const isYouTube = (url) => {
  return url?.includes("youtube.com") || url?.includes("youtu.be");
};

const getYouTubeThumbnail = (url) => {
  if (!url) return "";
  let videoId = "";
  if (url.includes("youtu.be")) {
    videoId = url.split("/").pop();
  } else if (url.includes("youtube.com")) {
    const params = new URL(url).searchParams;
    videoId = params.get("v");
  }
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
};

const VideoJourneySlider = ({ widgetData }) => {
  const videos = widgetData?.data || [];
  const [activeVideo, setActiveVideo] = useState(null);
  const swiperInstanceRef = useRef(null);

  useEffect(() => {
    if (videos.length && !activeVideo) {
      setActiveVideo(videos[0]);
    }
  }, [videos]);

  if (!videos.length) return null;

  const activeUrl = activeVideo?.redirect_url;
  const embedUrl = getEmbedUrl(activeUrl);

  const handleThumbnailClick = (item, index) => {
    setActiveVideo(item);
    swiperInstanceRef.current?.slideTo(index);
  };

  return (
    <section className={styles.videoSection}>
      <Container>
        {/* Header */}
        <Row className={styles.header}>
          <Col lg={8}>
            <h2 className={styles.title}>{parse(widgetData?.heading || "")}</h2>
            <p className={styles.desc}>{parse(widgetData?.description || "")}</p>
          </Col>
        </Row>

        {/* Main Video Player */}
        <div className={styles.mainVideoContainer}>
          {isYouTube(activeUrl) ? (
            <iframe
              key={embedUrl}
              src={embedUrl}
              className={styles.mainVideo}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={activeVideo?.heading}
            />
          ) : (
            <video key={activeUrl} controls className={styles.mainVideo}>
              <source src={activeUrl} type="video/mp4" />
            </video>
          )}
          <div className={styles.videoOverlay}>
            <span>{activeVideo?.heading}</span>
          </div>
        </div>

        {/* Thumbnail Slider */}
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            centerInsufficientSlides={true}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => {
              swiperInstanceRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              const newActive = videos[swiper.realIndex];
              if (newActive) {
                setActiveVideo(newActive);
              }
            }}
            pagination={{
              clickable: true,
              el: `.${styles.customPagination}`,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {videos.map((item, index) => {
              const isActive = activeVideo?.id === item.id;
              return (
                <SwiperSlide key={item.id}>
                  <div
                    className={`${styles.thumbCard} ${
                      isActive ? styles.activeThumb : ""
                    }`}
                    onClick={() => handleThumbnailClick(item, index)}
                  >
                    <div className={styles.imageBox}>
                      <Image
                        src={getYouTubeThumbnail(item.redirect_url)}
                        alt={item.heading}
                        width={300}
                        height={200}
                        className={styles.thumbnailImage}
                      />
                    </div>
                    <p className={styles.thumbTitle}>
                      {item.heading || "Loading title..."}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Controls */}
          {/* <div className={styles.controlsRow}>
            <button
              className={styles.prevArrow}
              onClick={() => {
                swiperInstanceRef.current?.slidePrev();
              }}
            >
              ❮
            </button>
            <div className={styles.customPagination}></div>
            <button
              className={styles.nextArrow}
              onClick={() => swiperInstanceRef.current?.slideNext()}
            >
              ❯
            </button>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default VideoJourneySlider;
