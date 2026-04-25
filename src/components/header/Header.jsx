"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import logo from "../../assets/images/svg/Semp - Logo.svg";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import international from "../../assets/images/svg/international.svg";
import { usePathname } from "next/navigation";
import Router from "next/router";

const Header = () => {
  const pathname = usePathname();
  const locale = pathname.startsWith("/ur") ? "ur" : "en";
  const [onScroll, setOnScroll] = useState(false);
  const [activeClass, setActiveClass] = useState("whatIs");
  const [isOpen, setIsOpen] = useState(false);

  // Sync React state with CSS media query (1000px)
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (locale === "ur") {
      document.body.classList.add("urdu");
      document.body.classList.remove("eng");
    } else {
      document.body.classList.add("eng");
      document.body.classList.remove("urdu");
    }
  }, [locale]);

  // Language Dropdown Component (Re-usable)
  const LanguageSelector = () => (
    <Dropdown className={styles.dropdownSemo}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <Image className={styles.dropdownFlag} src={international} alt="lang" />
        <span className="ms-1">{locale === "ur" ? "Urdu" : "English"}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownMenu}>
        <Dropdown.Item
          className={styles.dropdownAnchor}
          href={
            typeof window !== "undefined" &&
              window.location.hostname === "getzpharmadigital.com"
              ? locale === "ur"
                ? "/sem-o/en"
                : "/sem-o/ur"
              : locale === "ur"
                ? "/en"
                : "/ur"
          }
        >
          {locale === "ur" ? "English" : "Urdu"}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <div className={`${styles.topBar} ${onScroll ? styles.stickyHeader : ""}`}>
      {/* 1. TOP BLACK BAR */}
      <div className={styles.topBarArea}>
        <Row className="m-0">
          <Col xs={12} xl={7} className="p-0">
            <div className={`${styles.topNav}`}>
              <Link href="/prescribing-information">
                Prescribing Information
              </Link>
              <Link href="/patient-toolkit">Patient Tool Kit</Link>
              <p
                className={styles.uanNumber}
                onClick={() => (window.location.href = "tel:+9221111455455")}
                style={{ cursor: "pointer" }}
              >
                Helpline: 021 111 455 455
              </p>
            </div>
          </Col>
        </Row>
      </div>

      {/* 2. MOBILE HEADER (Logo + Burger) - Only shows <= 1000px */}
      {isSmallScreen && (
        <div className={styles.wrapeWithLogo}>
          <Link href="/">
            <Image
              onClick={() => Router.push("/")}
              src={logo}
              alt="Logo"
              className={styles.logoMobile}
            />
          </Link>
          <div className="d-flex align-items-center">
            <LanguageSelector />
            <div
              className={styles.wrapeMenu}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={isOpen ? styles.crossSvg : styles.svgMenu}
              ></span>
            </div>
          </div>
        </div>
      )}

      {/* 3. MOBILE MENU DROPDOWN */}
      {isSmallScreen && (
        <div
          className={`${styles.headerLinkMobilee} ${isOpen ? styles.headerLinkMobileeActive : ""}`}
        >
          <div className={styles.linkWrape}>
            <Link href="/" onClick={() => setIsOpen(false)}>
              About Sem-P
            </Link>
            <Link href="/mechanism-action" onClick={() => setIsOpen(false)}>
              Mechanism of Action
            </Link>
            <Link href="/proven-result" onClick={() => setIsOpen(false)}>
              Proven Result
            </Link>
            {/* <Link href="/research-papers" onClick={() => setIsOpen(false)}>
              Research Studies
            </Link> */}
            <Link href="/video-library" onClick={() => setIsOpen(false)}>
              Video Library
            </Link>
          </div>
        </div>
      )}

      {/* 4. DESKTOP MAIN NAVIGATION - Only shows > 1000px */}
      {!isSmallScreen && (
        <Container className={styles.containerAllLinks} fluid>
          <Row className="w-100 align-items-center">
            <Col lg={3}>
              <Link href="/">
                <Image className={styles.logoImgg} src={logo} alt="Logo" />
              </Link>
            </Col>
            <Col lg={9}>
              <div className={styles.headerLink}>
                <Link
                  className={
                    pathname === "/en" || pathname === "/"
                      ? styles.activeNavv
                      : ""
                  }
                  href="/"
                >
                  About Sem-P
                </Link>

                <Link
                  className={
                    pathname === "/mechanism-action" ? styles.activeNavv : ""
                  }
                  href="/mechanism-action"
                >
                  Mechanism of Action
                </Link>

                <Link
                  className={
                    pathname === "/proven-result" ? styles.activeNavv : ""
                  }
                  href="/proven-result"
                >
                  Proven Result
                </Link>

                {/* <Link
                  className={
                    pathname === "/research-papers" ? styles.activeNavv : ""
                  }
                  href="/research-papers"
                >
                  Research Studies
                </Link> */}

                <Link
                  className={
                    pathname === "/video-library" ? styles.activeNavv : ""
                  }
                  href="/video-library"
                >
                  Video Library
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Header;
