import React from 'react'
import styles from './ObesitySingleArticle.module.scss';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const ObesitySingleArticle = ({img,href, heading}) => {
    return (
        <div className={`${styles.articleList}`}>
            <Row>
                <Col md={6}>
                    <Image src={img} alt="article" />
                </Col>
                <Col md={6} className="ps-md-0">
                    <h6>FITNESS</h6>
                    <h4>{heading}</h4>
                    <Link href={`${href}`}>Read Article</Link>
                </Col>
            </Row>
        </div>
    )
}

export default ObesitySingleArticle;