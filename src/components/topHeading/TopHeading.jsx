import React from 'react'
import styles from "./topHeading.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
function TopHeading({ data }) {
    return (
        <div >
            <div className={`${styles.articledetailHeading} bannerdetailHeading`}>
                <h2>{data?.name}
                </h2>
            </div>
        </div>
    )
}

export default TopHeading
