"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./bannerDoctor.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import bannerImage from "../../../assets/images/semo-home-bg.png";
import bannerImage2 from "../../../assets/images/semo-home-bg2.png";
import bg1 from "../../../assets/images/semo-home-bg-res.png";
import bg2 from "../../../assets/images/semo-home-bg-res2.png";
import rightImage1 from "../../../assets/images/png/banner_doctor.png";
import rightImage2 from "../../../assets/images/png/banner_doctor.png";
import arrowbanner from "../../../assets/images/arrowbanner.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import imgCart from "../../../assets/images/svg/cartBtn.svg";
import imgCartVideo from "../../../assets/images/svg/videoCart.png";
import parse from "html-react-parser";


const PROD_URL = "https://consult.health-fitness.pk/booking-confirmed";
const STAGING_URL =
  "https://staging-consult.health-fitness.pk/booking-confirmed";

const detectStagingHost = (hostname = "") => {
  const h = hostname.toLowerCase();
  return h.includes("staging") || h.includes("staging-");
};

function BannerDoctor({ widgetData }) {
  const [showButtons, setShowButtons] = useState(false);
  const router = useRouter();
  const [consultUrl, setConsultUrl] = useState(PROD_URL);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const host = window.location.hostname || "";
    if (detectStagingHost(host)) {
      setConsultUrl(STAGING_URL);
    } else {
      setConsultUrl(PROD_URL);
    }
  }, []);

  const handleStart = () => {
    // navigation via setting location (keeps current behavior)
    window.location.href = consultUrl;
  };

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

  const active = slides[bgIndex] || slides[0];

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
          <Image layout="fill" src={widgetData?.data[0]?.image} alt="" />
        </div>
      )}
      <div
        className={`${styles.wrapeActionBtn} ${showButtons ? styles.showBtn : ""
          }`}
      >
        <div className={styles.imageContainer}>
          <Image
            src={imgCart}
            alt="Buy Now"
            tabIndex={0}
            onClick={() =>
              router.push(
                "https://careconnect.pk/products/sem-o-semaglutide?_pos=3&_sid=1bf36e554&_ss=r"
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(
                  "https://careconnect.pk/products/sem-o-semaglutide?_pos=3&_sid=1bf36e554&_ss=r"
                );
              }
            }}
          />
          <span>Buy Now</span>
        </div>

        <div className={styles.imageContainer} onClick={() => handleStart()}>
          <Image
            src={imgCartVideo}
            alt="Consult Now"
            tabIndex={0}
            onClick={() => handleStart()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleStart();
              }
            }}
          />
          <span>Consult Now</span>
        </div>
      </div>
      <div
        className={`${styles.wraper_arrow_top} ${showButtons ? styles.showBtnArrow : ""
          } `}
        onClick={() => window.scrollTo(0, 0)}
      >
        <span className={styles.arrowUpSvg}></span>
      </div>
      <div className={styles.boxTExttt}>
        <h1>{widgetData?.heading && parse(widgetData?.heading)}</h1>
        <p>{widgetData?.description && parse(widgetData?.description)}</p>
      </div>
    </div>
  );
}

export default BannerDoctor;
