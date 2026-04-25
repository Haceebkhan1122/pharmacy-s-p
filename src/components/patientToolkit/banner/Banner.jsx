"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./banner.module.scss";
import { isMobile } from "react-device-detect";
import Image from "next/image";

// Default images agar API se image na mile (Fallback)
import imgMobDefault from '../../../assets/images/png/lar.png';

function BannerDoctor({ widgetData }) {
  // API data extraction
  const heading = widgetData?.heading || "Patient Tool Kit";
  const description = widgetData?.description || "";

  // Data array se first item nikalna
  const itemData = widgetData?.data?.[0] || {};
  const buttonText = itemData?.button_text || "Download Patient Toolkit";
  const redirectUrl = itemData?.redirect_url || "#";
  const bannerImg = itemData?.image || imgMobDefault;

  return (
    <div
      className={styles.bannerMain}
      style={{
        transition: "background-image 0.1s ease-in-out",
      }}
    >
      {/* Mobile Image Dynamic */}
      {isMobile && (
        <div className={styles.wraper_img_mobl}>
          {/* Agar API se image URL aa raha hai to simple img tag ya loader handle karein */}
          <img src={bannerImg} alt="Banner" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}

      <div className={styles.boxTExttt}>
        {/* Dynamic Heading */}
        <h1>{heading}</h1>

        {/* Dynamic Description (HTML content handling) */}
        <div
          className={styles.descriptionText} // Aap apna existing p style yahan use kar sakte hain
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Dynamic Button */}
        <button
          className={styles.patientDownload}
          onClick={() => window.open(redirectUrl, "_blank")}
        >
          {/* <span className={styles.downloadIcon}></span> */}
          <svg
    className={styles.downloadIcon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path
      d="M16.5 22.0616L9.6692 15.2308L11.3556 13.4956L15.3 17.44V4H17.7V17.44L21.6444 13.4956L23.3308 15.2308L16.5 22.0616ZM7.3924 28C6.58413 28 5.9 27.72 5.34 27.16C4.78 26.6 4.5 25.9159 4.5 25.1076V20.7692H6.9V25.1076C6.9 25.2308 6.95133 25.3436 7.054 25.446C7.1564 25.5487 7.2692 25.6 7.3924 25.6H25.6076C25.7308 25.6 25.8436 25.5487 25.946 25.446C26.0487 25.3436 26.1 25.2308 26.1 25.1076V20.7692H28.5V25.1076C28.5 25.9159 28.22 26.6 27.66 27.16C27.1 27.72 26.4159 28 25.6076 28H7.3924Z"
      fill="currentColor"
    />
  </svg>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BannerDoctor;