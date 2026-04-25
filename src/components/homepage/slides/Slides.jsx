"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slides.module.scss";
import Image from "next/image";

const Slides = ({ widgetData }) => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderTrack}>
        {[...Array(7)].map((_, i) => (
          <div className={styles.slidesBoxWrapper} key={i}>
            <div className={styles.slideBox}>
              <Image src={widgetData?.data?.[0]?.card_1_icon} alt="" className="img-fluid" width={20} height={20} />
              <p>{widgetData?.data?.[0]?.card_1_head}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={widgetData?.data?.[0]?.card_2_icon} alt="" className="img-fluid" width={20} height={20} />
              <p>{widgetData?.data?.[0]?.card_2_head}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={widgetData?.data?.[0]?.card_3_icon} alt="" className="img-fluid" width={20} height={20} />
              <p>{widgetData?.data?.[0]?.card_3_head}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={widgetData?.data?.[0]?.card_4_icon} alt="" className="img-fluid" width={20} height={20} />
              <p>{widgetData?.data?.[0]?.card_4_head}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={widgetData?.data?.[0]?.card_5_icon} alt="" className="img-fluid" width={20} height={20} />
              <p>{widgetData?.data?.[0]?.card_5_head}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slides;
