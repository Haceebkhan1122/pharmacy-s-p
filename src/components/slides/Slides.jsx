"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slides.module.scss";
import ibm1 from "../../assets/images/svg/ibm1.svg"
import ibm2 from "../../assets/images/svg/ibm2.svg"
import ibm3 from "../../assets/images/svg/ibm3.svg"
import ibm4 from "../../assets/images/svg/ibm4.svg"
import ibm5 from "../../assets/images/svg/ibm5.svg"
import ibm6 from "../../assets/images/svg/ibm6.svg"
import Image from "next/image";

const Slides = ({data}) => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderTrack}>
        {[...Array(7)].map((_, i) => (
          <div className={styles.slidesBoxWrapper} key={i}>
            <div className={styles.slideBox}>
              <Image src={ibm1} alt="" className="img-fluid" />
              <p>{data?.HomePage?.slide_keyOne}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={ibm2} alt="" className="img-fluid" />
              <p>{data?.HomePage?.slide_keyTwo}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={ibm3} alt="" className="img-fluid" />
              <p>{data?.HomePage?.slide_keyThree}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={ibm4} alt="" className="img-fluid" />
              <p>{data?.HomePage?.slide_keyFour}</p>
            </div>
            <div className={styles.slideBox}>
              <Image src={ibm6} alt="" className="img-fluid" />
              <p>{data?.HomePage?.slide_keyFive}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slides;
