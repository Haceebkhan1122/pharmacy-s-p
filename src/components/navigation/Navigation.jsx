'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from "./navigation.module.scss"
import Image from "next/image";
import arrow from "../../assets/images/svg/blueLeftArrow.svg";
import { Nav } from 'react-bootstrap'

function Navigation({data, headings}) {
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef(null);
    const [navTop, setNavTop] = useState(0);

    const [activeSection, setActiveSection] = useState(headings?.[0]);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], div[id]'); 
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -60% 0px", 
                threshold: 0.1, 
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    useEffect(() => {
        if (navRef.current) {
            setNavTop(navRef.current.offsetTop);
        }
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsSticky(scrollY >= navTop - 10);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navTop]);


    const handleClick = (id) => {
    const target = document.getElementById(id);
    const nav = document.querySelector(`.${styles.navigateBox}`); 

    if (target) {
        const headerOffset = nav ? nav.offsetHeight + 130 : 100; 
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        setActiveSection(id);
    }
};

    const getWindow = () => {
    }

    return (
        <div ref={navRef} className={`${styles.navigationWrapper}`}>
            <div
                className={`${styles.navigateBox} ${isSticky ? "stickyArticleBar" : ""}`}
            >
                <ul>
                    <li>
                        <Image src={arrow} alt="arrow" />
                    </li>
                  {headings?.map((item) => (
  <React.Fragment key={item}>
    <li
      className={activeSection === item ? "activeNav" : ""}
      onClick={() => handleClick(item)}
    >
      {item}
    </li>
  </React.Fragment>
))}

                </ul>
            </div>
        </div>
    )
}

export default Navigation
