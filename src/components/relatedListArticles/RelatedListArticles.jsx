import React from "react";
import styles from "./RelatedListArticles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import article1 from "../../assets/images/png/sideraises.png";
import ListArticleTool from "../listArticleTool/ListArticleTool";

export default function RelatedListArticles() {
  return (
    <div className={`${styles.healthToolReadArticle}`}>
      <Container>
        <Row>
          {/* <div className={styles.titleHeading}>
            <h3>Related Articles</h3>
          </div> */}
          <Col md={12} className="mb-4 mb-lg-0">
            <div className={`${styles.healthToolArticleList}`}>
              <Container>
                <Row>
                  <Col md={6} style={{ marginBottom: "40px", padding: "0" }}>
                    <ListArticleTool
                    img={article1}
                      text="Weight Loss Tips: These 8 Habits Are Slowing Your Metabolism Down"
                      subHeading="FITNESS"/>
                  </Col>
                  <Col md={6} style={{ marginBottom: "30px", padding: "0" }}>
                    <ListArticleTool
                    img={article1}
                      subHeading="FITNESS"
                      text="10 Reasons Why You May Not Be Loosing Weight"
                      />                      
                  </Col>
                  <Col md={6} style={{ padding: "0", marginBottom: "30px" }}>
                  <ListArticleTool
                    img={article1}
                      text="The Three Rules Your Diet Needs To Actually Work"
                      subHeading="NUTRITION"
                      /> 
                  </Col>
                  <Col md={6} style={{ padding: "0" }}>
                    <ListArticleTool
                    img={article1}
                      text="The 8 Best Juices For Weight Loss"
                      subHeading="NUTRITION"
                      /> 
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

