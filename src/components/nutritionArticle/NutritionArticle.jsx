"use client";

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import NutritionArticleList from "../NutritionArticleList/NutritionArticleList";
import styles from "./NutritionArticle.module.scss";
import parse from "html-react-parser";

export default function NutritionArticle({ widgetData }) {
  const router = useRouter();
  return (
    <div className={`${styles.nutritionArticle}`}>
      <Container>
        <Row>
          <Col md={6}>
            <div className={`${styles.article}`}>
              <Image
                src={widgetData?.data[0]?.image}
                alt="Nutrition Article Image"
                className="img-fluid"
                width={630} height={360}    
              />
              <h6>{parse(widgetData?.data[0]?.heading)}</h6>
              <h4>{parse(widgetData?.data[0]?.sub_head)}</h4>
              <p>{parse(widgetData?.data[0]?.description)}</p>
              <button
                onClick={() =>
                  router.push(`${widgetData?.data[0]?.redirect_url}`)
                }
              >
                {widgetData?.data[0]?.button_text}
              </button>
            </div>
          </Col>
          <Col md={6}>
            <div className={`${styles.nutritionArticleList} sampleClass`}>
              <Container>
                <Row>
                  {widgetData?.data?.slice(1).map((item, index) => (
                    <Col md={12} style={{ marginBottom: "30px", padding: "0" }}>
                      <NutritionArticleList
                        href={item?.redirect_url}
                        img={item?.image}
                        text={item?.sub_head}
                        subHeading={item?.heading}
                        buttonText={item?.button_text}
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Col>
          <Col lg={12} className={`${styles.spacing}`}>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
