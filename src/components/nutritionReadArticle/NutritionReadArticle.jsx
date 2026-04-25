import React from "react"
import styles from "./nutritionReadArticle.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import NutritionArticleList from "../NutritionArticleList/NutritionArticleList"
import parse from "html-react-parser";

export default function NutritionReadArticle({widgetData}) {
    return (
        <div className={`${styles.nutritionReadArticle}`}>
            <Container>
                <Row>
                    <Col md={12} className="mb-4 mb-lg-0">
                        <div className={`${styles.nutritionArticleList}`}>
                            <Container>
                                <Row>
                                    {widgetData?.data?.map((items) => (
                                        <Col md={6} style={{ marginBottom: "30px", padding: "0" }}>
                                        <NutritionArticleList 
                                        href={items.redirect_url} 
                                        img={items.image} 
                                        text={items.sub_head}
                                        subHeading={parse(items.heading)} 
                                        buttonText={parse(items.button_text)}
                                        />
                                    </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}