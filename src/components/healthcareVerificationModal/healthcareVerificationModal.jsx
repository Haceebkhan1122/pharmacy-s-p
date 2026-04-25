"use client";

import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./healthcareVerificationModal.module.scss";

const HealthcareVerificationModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasVerified = sessionStorage.getItem("healthcare_verified");

    if (!hasVerified) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  // 🔒 SCROLL LOCK HANDLER
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleContinue = () => {
    sessionStorage.setItem("healthcare_verified", "true");
    setShow(false);
  };


  useEffect(() => {
  if (show) {
    document.documentElement.style.overflow = "hidden"; // html
    document.body.style.overflow = "hidden";             // body
    document.body.style.height = "100vh";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  } else {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.body.style.position = "";
    document.body.style.width = "";
  }

  return () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.body.style.position = "";
    document.body.style.width = "";
  };
}, [show]);
  return (
    <Modal
      show={show}
      centered
      backdrop="static"
      keyboard={false}
      className={styles.healthcareModal}
    >
      <Modal.Body className={styles.modalBody}>
        <div className={styles.content}>
          <h2 className={styles.title}>For Health Care Professionals</h2>

          <p className={styles.description}>
            The information on <strong>www.sem-p.pk</strong> is intended for
            healthcare professionals in Pakistan only. If you are a healthcare
            professional based in Pakistan, please click "Continue" below.
          </p>

          <p className={styles.confirmation}>
            Yes, I am a healthcare professional based in Pakistan and would like
            to continue
          </p>

          <div className={styles.buttonGroup}>
            <button
              className={styles.continueBtn}
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HealthcareVerificationModal;
