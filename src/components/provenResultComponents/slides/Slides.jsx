"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slides.module.scss";
import ibm1 from "../../../assets/images/svg/provslideicon1.svg"
import ibm2 from "../../../assets/images/svg/provslideicon2.svg"
import ibm3 from "../../../assets/images/svg/provslideicon3.svg"
import ibm4 from "../../../assets/images/svg/provslideicon4.svg"
import ibm5 from "../../../assets/images/svg/provslideicon5.svg"
import Image from "next/image";

const Slides = ({widgetData}) => {

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderTrack}>
         {[...Array(7)].map((_, i) => (
        widgetData?.data?.map((item,index) => (
          <div className={styles.slidesBoxWrapper} key={i}>
            <div className={styles.slideBox}>
              <Image width={32} height={32} src={item?.image} alt="" className="img-fluid" />
              <p>{item?.heading}</p>
            </div>
          </div>
        ))
      ))}
      </div>
    </div>
  );
}

export default Slides;
