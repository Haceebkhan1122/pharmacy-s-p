import React, { useEffect, useState } from "react";
import styles from "./consultCTA.module.scss";
import Image from "next/image";
import arrow1 from "../../assets/images/svg/rightArrow.svg";
import video from "../../assets/images/svg/Videocamera.svg";
import drImage1 from "../../assets/images/png/doctorAunty.png";
import Link from "next/link";

function ConsultCTA() {
  const ConsultNowUrl = process.env.NEXT_PUBLIC_CONSULT_NOW_URL;
  const [consultUrl, setConsultUrl] = useState(ConsultNowUrl);
  useEffect(() => {
    if (typeof window === "undefined") return;
    setConsultUrl(ConsultNowUrl);
  }, []);

  const openCleanUrl = (e) => {
    e.preventDefault();
    // navigate in the same tab
    window.location.href = consultUrl;
  };

  return (
    <div className={`${styles.consultCTA} consultCTA `}>
      <a href={consultUrl} onClick={openCleanUrl}>
        <div>
          <h3>Consult a Doctor Today</h3>

          <Image alt="" src={arrow1} className="img-fluid"></Image>
          <Image className={`${styles.video}`} alt="" src={video}></Image>
          <Image
            alt=""
            src={drImage1}
            className={`${styles.drImage1} img-fluid `}
          ></Image>
        </div>
      </a>
    </div>
  );
}

export default ConsultCTA;
