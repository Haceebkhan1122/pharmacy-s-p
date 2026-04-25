'use client'
import React, { useState } from "react";
import styles from "./videoSection.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import video from "../../../assets/images/svg/video_play.svg";
import videoButton from "../../../assets/images/svg/video_button.svg";
import YouTubeEmbed from "../../YouTubeEmbed";
import Image from "next/image";

const VideoSection = ({ widgetData }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className={`${styles.VideoSection}`} id="howtouse">
      <Container fluid className="p-0">
        <Row>
          <Col lg={12}>
            {!isPlaying ? (
              <div className={`${styles.videoPlay}`}>
                <Image src={video} alt="video play" className={`${styles.videoImage}`} />
                <Image src={videoButton} alt="video button" className={`${styles.button}`} onClick={() => setIsPlaying(true)} />
              </div>
            ) : (
              <div className={styles.topImageWrap}>
                <div className={styles.topImageInner}>
                  <YouTubeEmbed url={widgetData?.data?.[0]?.redirect_url} autoplay={true} />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoSection;
