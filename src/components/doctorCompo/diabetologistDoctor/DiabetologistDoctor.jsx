"use client";

import React, { useState } from "react";
import styles from "./diabetologistDoctor.module.scss";
import Image from "next/image";
import { Col, Container, Row, Button } from "react-bootstrap";
import VideoModal from "./videomodal/videomodal";

const Diabetologist = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");
  return (
    <div className={styles.diabetologist}>
      <Container>
        <div className={styles.header}>
          <h3 className={styles.title}>Physician Perspectives</h3>
        </div>

        <Row className="g-4 justify-content-center">
          {/* Card 1 */}
          <Col md={4} sm={6} xs={12}>
            <div
              className={styles.diabetologistImageOne}
              onClick={() => { setVideoId("Cf5PbT5SXjg"); setOpen(true); }}
            >
              <span className={styles.youtIco}>
                {/* <Image src={playButton} alt="icon" /> */}
              </span>
            </div>
          </Col>

          {/* Card 2 */}
          <Col md={4} sm={6} xs={12}>
            <div
              className={styles.diabetologistImageTwo}
              onClick={() => { setVideoId("oFVOvtRbJ6w"); setOpen(true); }}
            >
              <span className={styles.youtIco}></span>
            </div>
          </Col>

          {/* Card 3 */}
          <Col md={4} sm={6} xs={12}>
            <div
              className={styles.diabetologistImageThree}
              onClick={() => { setVideoId("d80kllF3gWo"); setOpen(true); }}
            >
              <span className={styles.youtIco}></span>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-center mt-5">
          <Button className={styles.cta}>Watch More</Button>
        </div>
      </Container>

      <VideoModal isOpen={open} onClose={() => setOpen(false)} videoId={videoId} />
    </div>
  );
};

export default Diabetologist;
