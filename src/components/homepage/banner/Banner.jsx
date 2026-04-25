"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./banner.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import parse from "html-react-parser";
import imgCartVideo from '../../../assets/images/png/videoCart.png';
import imgCart from '../../../assets/images/svg/cartBtn.svg';
import { useMediaQuery } from "@mui/material";

const PROD_URL = "https://consult.health-fitness.pk/booking-confirmed";
const STAGING_URL = "https://staging-consult.health-fitness.pk/booking-confirmed";

const detectStagingHost = (hostname = "") => {
  const h = hostname.toLowerCase();
  return (
    h.includes("staging") ||
    h.includes("staging-")
  );
};

function Banner({ widgetData }) {
  const pathname = usePathname();
  const locale = pathname.startsWith("/ur") ? "ur" : "en";
  const [showButtons, setShowButtons] = useState(false);
  const router = useRouter();
  const [consultUrl, setConsultUrl] = useState(PROD_URL);
  const isMobile = useMediaQuery('(max-width:768px)');
  const isTablet = useMediaQuery('(min-width:769px) and (max-width:1023px)');

  const slides = widgetData?.data;
  const [bgIndex, setBgIndex] = useState(0);
  const intervalMs = 5000;
  const timerRef = useRef(null);
  const pausedRef = useRef(false);
  
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

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.querySelector('#whatissemp');
      if (!triggerElement) return;

      const triggerPoint = triggerElement.offsetTop;
      const scrollY = window.scrollY + window.innerHeight / 3;
      setShowButtons(scrollY >= triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // const active = slides[bgIndex] || slides[0];
  const active = slides[0];

  return (
    <div
      className={`${styles.bannerMain} bannerMain`}
      style={{
        // backgroundImage: `url(${isMobile ? active.mobileImage : isTablet ? active?.src : active?.src})`,
        // transition: "background-image 0.6s ease-in-out",
      }}
    >
      {active?.image && (
        <Image
          src={active.image}
          alt="banner"
          style={{ objectFit: "cover", zIndex: '1', objectPosition: 'top' }}
          priority
          width={1900}
          height={760}
        />
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
                "https://careconnect.pk/products/sem-p-semaglutide?_pos=1&_sid=da03e8c47&_ss=r"
              )
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(
                  "https://careconnect.pk/products/sem-p-semaglutide?_pos=1&_sid=da03e8c47&_ss=r"
                );
              }
            }}
          />
          <span>Buy Now</span>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={imgCartVideo}
            alt="Consult Now"
            tabIndex={0}
            onClick={handleStart}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleStart();
              }
            }}
          />
          <span>{active?.button_text}</span>
        </div>
      </div>
      <div className={`${styles.wraper_arrow_top} ${showButtons ? styles.showBtnArrow : ""} `} onClick={() => window.scrollTo(0, 0)}>
        <span className={styles.arrowUpSvg}></span>
      </div>
      <Container className={styles.zIndexx}>
        <Row className="h-100">
          <Col lg={6} md={6} className="mt-auto">
            {/* <Image src={bannerImage} className='img-fluid' alt='banner image'></Image> */}
          </Col>
          <Col lg={5} className="ms-0" sm={6} md={6} xs={12} >
            <h1 className={slides[1]?.src == active?.src ? `${styles.pt_200} ${styles.bannerHeadingFirst} ${styles.bannerHeadingBlaaa}` : `${styles.pt_200} ${styles.bannerHeadingFirst}`}>{active?.heading || ''} </h1>
          </Col>
        </Row>
      </Container>
      <div className={`${styles.boxBanner} `} >
        <p className={`${styles.zind} ${styles.banner_description}`}>
          {" "}
          {active?.card_1_head}
        </p>
        <div className={`${styles.zind} ${styles.btnUrdu} d-flex gap-3`}>
          {/* <button className={styles.button1} onClick={() => window.location.href = ('https://getzpharmadigital.com/health-fitness/booking-confirmed')}>
                    </button> */}
          <button className={styles.button1} onClick={() => window.open("https://wa.me/9221111455455", "_blank")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2288 19.1763C22.8325 18.978 20.8839 18.0194 20.5206 17.8872C20.1573 17.7551 19.8931 17.6889 19.6289 18.0856C19.3647 18.4822 18.6052 19.3746 18.3739 19.6391C18.1428 19.9035 17.9116 19.9366 17.5153 19.7382C17.1189 19.54 15.8419 19.1215 14.3281 17.7717C13.1499 16.7212 12.3545 15.4236 12.1232 15.0269C11.8921 14.6303 12.0986 14.4159 12.2971 14.2183C12.4753 14.0409 12.6934 13.7556 12.8915 13.5242C13.0897 13.2928 13.1557 13.1276 13.2879 12.8632C13.42 12.5987 13.3539 12.3674 13.2548 12.169C13.1557 11.9707 12.3631 10.0206 12.0329 9.22726C11.7112 8.4547 11.3844 8.55923 11.1411 8.54712C10.9102 8.53561 10.6457 8.53317 10.3815 8.53317C10.1173 8.53317 9.68796 8.63237 9.32461 9.02894C8.96134 9.42559 7.9375 10.3842 7.9375 12.3343C7.9375 14.2844 9.35768 16.1685 9.55585 16.4329C9.75402 16.6974 12.3506 20.6993 16.3263 22.4155C17.2719 22.8237 18.0102 23.0675 18.5857 23.2502C19.5352 23.5517 20.3992 23.5091 21.0821 23.4071C21.8435 23.2934 23.427 22.4486 23.7573 21.5231C24.0875 20.5976 24.0875 19.8043 23.9884 19.6391C23.8894 19.4738 23.6252 19.3746 23.2288 19.1763ZM15.9965 29.047H15.9911C13.6255 29.0461 11.3052 28.4109 9.28103 27.21L8.79958 26.9243L3.80983 28.2329L5.1417 23.3694L4.82818 22.8709C3.5085 20.7724 2.81151 18.3471 2.8125 15.8568C2.8154 8.59012 8.72964 2.67817 16.0017 2.67817C19.5231 2.67954 22.8332 4.05225 25.3224 6.54336C27.8115 9.03454 29.1815 12.3459 29.1802 15.8675C29.1772 23.1347 23.263 29.047 15.9965 29.047ZM27.2154 4.65033C24.2207 1.6531 20.2381 0.00167847 15.9949 3.8147e-06C7.25214 3.8147e-06 0.136532 7.11287 0.133028 15.8557C0.131885 18.6505 0.862241 21.3785 2.25027 23.7831L0 32L8.40862 29.7951C10.7254 31.0583 13.3338 31.724 15.9886 31.7251H15.9951H15.9952C24.7371 31.7251 31.8533 24.6113 31.8569 15.8684C31.8585 11.6315 30.2102 7.64749 27.2154 4.65033Z" fill="white" />
            </svg>
            {active?.button_text}
          </button>

          {/* <button className={styles.button2} onClick={() => window.location.href = ('https://careconnect.pk/products/sem-p-prefilled-pen-semaglutide?_pos=2&_sid=7b7ce1085&_ss=r')}>
                        {locale === 'ur' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1232 15.9981L15.0625 7.05879L12.9412 4.93747L1.8806 15.9981L12.9412 27.0588L15.0625 24.9376L6.1232 15.9981Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 17.5H28V14.5H4V17.5Z" fill="white" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                className={styles.arrowClass}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M25.8768 15.9981L16.9375 7.05879L19.0588 4.93747L30.1194 15.9981L19.0588 27.0588L16.9375 24.9376L25.8768 15.9981Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M28 17.5H4V14.5H28V17.5Z"
                                    fill="white"
                                />
                            </svg>
                        )}
                    </button> */}
        </div>
        <a className={styles.numBannnerr} href="tel:021-111-455-455"> {active?.card_1_desc} </a>
        {/* <Image
                    src={bannerBox}
                    className={`${styles.boxImageBottom} `}
                    alt="banner image"
                    priority
                    quality={70 - 85}
                ></Image> */}
      </div>
    </div>
  );
}

export default Banner;
