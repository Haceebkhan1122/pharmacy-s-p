'use client';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import styles from './doctorsThousandSlider.module.scss';
import Image from 'next/image';
import Left from '../../assets/images/svg/left.svg';
import Right from '../../assets/images/svg/right.svg';
import { isMobile } from 'react-device-detect';

const DoctorsThousandSlider = () => {

    const slides = [
        {
            description: `"Since I started using Sem-P, I’ve achieved some things that seemed near impossible a few years ago."`,
            heading: "Sara Afzal",
            category: "Weight Loss",
            image: "https://images.pexels.com/photos/7686286/pexels-photo-7686286.jpeg",
        },
        {
            description: `"With Why Wait, it’s not just about losing weight, it’s about building habits that last so the weight stays off for good. That’s the best thing about it."`,
            heading: "Ahmed Ibrahim",
            category: "Weight Loss",
            image: "https://images.pexels.com/photos/7686286/pexels-photo-7686286.jpeg",
        },
        {
            description: `"Since I started using Sem-P, I’ve achieved some things that seemed near impossible a few years ago."`,
            category: "Weight Loss",
            heading: "Ahmed Ibrahim 3",
            image: "https://images.pexels.com/photos/7686286/pexels-photo-7686286.jpeg",
        },
        {
            description: `"Since I started using Sem-P, I’ve achieved some things that seemed near impossible a few years ago."`,
            category: "Weight Loss",
            heading: "Sara Afzal",
            image: "https://images.pexels.com/photos/7686286/pexels-photo-7686286.jpeg",
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    const getVisibleSlides = () => {
        if (isMobile) {
            return [slides[current]];
        } else {
            // 💻 Desktop: 3 slides (prev, current, next)
            const prevIndex = current === 0 ? slides.length - 1 : current - 1;
            const nextIndex = (current + 1) % slides.length;
            return [slides[prevIndex], slides[current], slides[nextIndex]];
        }
    };



    const visibleSlides = getVisibleSlides();

    return (
        <div className={styles.allWrape}>
            <div className={styles.sliderWrapper}>
                <div className={styles.topWrapeee}>
                    {!isMobile && <h2> Join thousands feeling better <br /> and living fuller </h2>}
                    {isMobile && <h2> Join thousands feeling better and living fuller </h2>}
                    {!isMobile && <div className={styles.arrows}>
                        <Image src={Left} alt='' onClick={prevSlide} />
                        <Image onClick={nextSlide} src={Right} alt='' />
                    </div>}
                </div>
                <div className={styles.sliderContainer}>
                    {visibleSlides.map((slide, index) => {
                        const isCenter = isMobile ? true : index === 1;
                        const isLast = !isMobile && index === 2;
                        return (
                            <div
                                key={index}
                                className={`${styles.slide} ${isCenter ? styles.centerSlide : styles.sideSlide
                                    } ${isLast ? styles.lastSlide : ""}`}
                            >
                                {isCenter ? (
                                    <img
                                        src={slide.image}
                                        alt="slide"
                                        width={740}
                                        height={500}
                                        className={styles.image}
                                    />
                                ) : (
                                    <div className={styles.textSlide}>
                                        <p> {slide.description} </p>
                                        <h1>{slide.heading} <span> {slide.category} </span> </h1>

                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                {isMobile && <div className={styles.arrows}>
                    <Image src={Left} alt='' onClick={prevSlide} />
                    <Image onClick={nextSlide} src={Right} alt='' />
                </div>}
            </div>
        </div>
    )
}

export default DoctorsThousandSlider;
