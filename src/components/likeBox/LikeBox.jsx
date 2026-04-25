import React from 'react'
import styles from "./likeBox.module.scss"
import Image from "next/image";
import { Col, Container, Row } from 'react-bootstrap'

function LikeBox({ handleFeedback }) {
    return (
        <div >
            <div className={`${styles.likeBox} likeBox mt-5`}>
{/* 
                <Row>
                    <Col lg={10} xs={8}>
                        <div className={`${styles.boxLike}`}>
                            <p>Was this article helpful?</p>
                        </div>
                    </Col>
                    <Col lg={2} xs={4}>

                        <div className={`${styles.boxLike1} d-flex gap-3`}>
                            <Image onClick={() => handleFeedback("false")} src={dlike} alt=''></Image>
                            <Image onClick={() => handleFeedback("true")} src={like} alt=''></Image>
                        </div>
                    </Col>
                </Row> */}

            </div>
        </div>
    )
}

export default LikeBox
