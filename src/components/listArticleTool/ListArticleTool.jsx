import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import styles from "./ListArticleTool.module.scss"

export default function ListArticleTool({text, img, subHeading}) {
    return (
        <>
            <div className={`${styles.articleList}`}>
                <Row>
                    <Col md={6}>
                        <Image src={img} alt="article" />
                    </Col>
                    <Col md={6}>
                        <h6>{subHeading}</h6>
                        <h4>{text}</h4>
                        <Link href="/">Read Article</Link>
                    </Col>
                </Row>
            </div>
        </>
    )
}