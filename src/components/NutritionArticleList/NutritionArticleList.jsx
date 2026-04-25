'use client';
import React, { useState } from "react"
import { Col, Row, Spinner } from "react-bootstrap"
import Image from "next/image"
import styles from "./NutritionArticleList.module.scss"
import { useRouter } from "next/navigation";

export default function NutritionArticleList({text, img, href, subHeading,buttonText}) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
        router.push(href);
    } 

    return (
        <>
        {isLoading &&  <div className="loaderrrrrr"> <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> </div>}
             <div className={`${styles.articleList}`} > 
                <Row>
                    <Col md={6}>
                        <Image width={300} height={210} src={img} alt="article" />
                    </Col>
                    <Col md={6}>
                        <h6 className={`subHeadingNutrition`} >{subHeading}</h6>
                        <h4 className={`HeadingNutrition`} style={{padding: '1rem 0'}}>{text}</h4>
                        {/* <Link href={`${href}`}>Read Article</Link> */}
                        <span className={`buttonTextss`} onClick={handleClick}>{buttonText}</span>
                    </Col>
                </Row>
            </div>
        </>
    )
}