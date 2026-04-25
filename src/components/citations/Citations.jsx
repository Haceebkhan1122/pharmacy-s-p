import React from 'react'
import styles from "./citations.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import parse from "html-react-parser";

const Citations = ({ data }) => {
  return (
    <div className={`${styles.citation}`}>
      <Container>
        <Row>
          <Col md={12}>
            <h2>{data.HomePage.citations}</h2>
            <p>{parse(data.HomePage.citations_textone)}</p>
            <p>{parse(data.HomePage.citations_texttwo)}</p>
            <p>{parse(data.HomePage.citations_textthree)}</p>
            <p>{parse(data.HomePage.citations_textfour)}</p>
            <p>{parse(data.HomePage.citations_textfive)}</p>
            <p>{parse(data.HomePage.citations_textsix)}</p>
            <p>{parse(data.HomePage.citations_textseven)}</p>
            <p>{parse(data.HomePage.citations_texteight)}</p>
            <p>{parse(data.HomePage.citations_textnine)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Citations