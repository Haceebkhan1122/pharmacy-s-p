"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./banner.module.scss";
import bannerImage from "../../../assets/images/semo-home-bg.png";
import bannerImage2 from "../../../assets/images/semo-home-bg2.png";
import bg1 from "../../../assets/images/semo-home-bg-res.png";
import bg2 from "../../../assets/images/semo-home-bg-res2.png";
import rightImage1 from "../../../assets/images/png/banner_doctor.png";
import rightImage2 from "../../../assets/images/png/banner_doctor.png";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import img from '../../../assets/images/png/vid11.png';
import parse from "html-react-parser";


function BannerVideo({ widgetData }) {

  const slides = [
    {
      src: bannerImage?.src ?? bannerImage,
      human: bannerImage,
      mobileImage: bg1,
      rightImage: rightImage2,
      heading: "Oral GLP-1 therapy enabled by SNAC technology.",
    },
    {
      src: bannerImage2?.src ?? bannerImage2,
      human: bannerImage2,
      mobileImage: bg2,
      rightImage: rightImage1,
      heading: "Oral GLP-1 therapy enabled by SNAC technology.",
    },
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const intervalMs = 5000;
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  // autoplay (cycles slides). depends on slides.length so it resets if slides change.
  useEffect(() => {
    // clear existing
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setInterval(() => {
      if (!pausedRef.current && slides.length > 0) {
        setBgIndex((i) => (i + 1) % slides.length);
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.querySelector("#whatissemo");
      if (!triggerElement) return;

      const triggerPoint = triggerElement.offsetTop;
      const scrollY = window.scrollY + window.innerHeight / 3;
      setShowButtons(scrollY >= triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles.bannerMain}
      style={{
        transition: "background-image 0.1s ease-in-out",
         backgroundImage:`url(${ widgetData?.data[0]?.image})`,

      }}
    >
      {isMobile && (
        <div className={styles.wraper_img_mobl}>
          <Image layout="fill" src={img} alt="" />
        </div>
      )}
      <div className={styles.boxTExttt}>
        <h1>{widgetData && parse(widgetData?.heading)}</h1>
        {widgetData && parse(widgetData?.description)}
      </div>
    </div>
  );
}

export default BannerVideo;
