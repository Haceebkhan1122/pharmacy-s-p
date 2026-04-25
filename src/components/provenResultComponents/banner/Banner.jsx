"use client";

import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import imgMob from '../../../assets/images/png/lar.png';
import parse from "html-react-parser";

function BannerDoctor({ widgetData }) {

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
          <Image src={imgMob} alt="" />
        </div>
      )}
      <div className={styles.boxTExttt}>
        <h1 style={{marginRight: '9px'}}>{widgetData && parse(widgetData?.heading)}</h1>
      </div>
    </div>
  );
}

export default BannerDoctor;
