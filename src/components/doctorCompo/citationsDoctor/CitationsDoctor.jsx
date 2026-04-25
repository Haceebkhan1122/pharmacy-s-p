import React from 'react'
import styles from './citationsDoctor.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import parse from 'html-react-parser';

const CitationsDoctor = ({ data }) => {
    return (
        <div className={styles.needToGet}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={styles.boxx}>
                            <h2> Reference </h2>
                            <p> <sup> [1] </sup> Frías JP, Auerbach P, Bajaj HS, Fukushima Y, Lingvay I, Macura S, et al. Efficacy and safety of once-weekly semaglutide 2·0 mg versus 1·0 mg in patients with type 2 diabetes (SUSTAIN FORTE): a double-blind, randomised, phase 3B trial. The Lancet Diabetes & Endocrinology [Internet]. 2021 Sep;9(9):563–74. </p>
                            <p><sup> [2] </sup> Frías JP, Auerbach P, Bajaj HS, Fukushima Y, Lingvay I, Macura S, et al. Efficacy and safety of once-weekly semaglutide 2·0 mg versus 1·0 mg in patients with type 2 diabetes (SUSTAIN FORTE): a double-blind, randomised, phase 3B trial. The Lancet Diabetes & Endocrinology [Internet]. 2021 Sep;9(9):563–74.
sity/obesity-classification </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default CitationsDoctor;
