'use client'
import React from "react";
import styles from "./videoSection.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import YouTubeEmbed from "../YouTubeEmbed";
import parse from "html-react-parser";

const VideoSection = ({widgetData}) => {

  return (
    <div className={`${styles.VideoSection}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className={styles.heading}>{widgetData && parse(widgetData?.heading)}</h2>
          </Col>
        </Row>
      <Row>
        <Col lg={12}>
          <div className={styles.topImageWrap}>
            <div className={styles.topImageInner}>
              <YouTubeEmbed url={widgetData?.redirect_url} autoplay={false} />
            </div>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default VideoSection;
