"use client"

import React, { useState,useCallback, useRef } from 'react'
import styles from "./shareBox.module.scss"
import Image from "next/image";
import Print from "../../assets/images/svg/printerIcons.svg";
import { useReactToPrint } from "react-to-print";
import {faFacebookF,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faShare } from '@fortawesome/free-solid-svg-icons';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton
} from 'react-share';

function ShareBox({componentRef}) {
   const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Article Print",
    copyStyles: true,
  });

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };
  return (
    <div className={styles.shareBoxWrapper}>
      <button onClick={() => handlePrint()} className={styles.shareIcon}>
        <Image src={Print} alt="print" width={25} height={25} />
      </button>
      <div
        className={styles.dropdownWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={styles.triggerButton}>
          <FontAwesomeIcon icon={faShare} className={styles.shareFontIcon} />
          <span>Share This Article</span>
        </button>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <FacebookShareButton
              url={typeof window !== "undefined" ? window.location.href : ""}
              className={styles.share_icons}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </FacebookShareButton>

            <TwitterShareButton
              url={typeof window !== "undefined" ? window.location.href : ""}
              className={styles.share_icons}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </TwitterShareButton>

            <EmailShareButton
              url={typeof window !== "undefined" ? window.location.href : ""}
              className={styles.share_icons}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </EmailShareButton>
          </div>
        )}
      </div>
    </div>
    )
}

export default ShareBox



