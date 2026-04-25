import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./research.module.scss";
import parse from "html-react-parser";

const ResearchStudies = ({widgetData}) => {

    return (
        <section className={styles.researchSection}>
            <Container>
                {/* Header Section */}
                <div className={styles.headerArea}>
                    <h2>{widgetData && parse(widgetData?.heading)}</h2>
                    {/* <p> */}
                       {widgetData && parse(widgetData?.description)}
                    {/* </p> */}
                </div>

                {/* Research Cards */}
                <Row className="justify-content-center gap-4 gap-lg-0">
                    {widgetData?.data?.map((study, index) => (
                        <Col lg={5} key={index} className="mb-4">
                            <div className={styles.studyCard}>
                                <span className={styles.journalName}>{parse(study?.heading)}</span>
                                <h3>{parse(study?.sub_head)}</h3>
                                <span className={styles.date}>{parse(study?.description)}</span>
                                <div className={`d-flex flex-column flex-md-row gap-3 gap-md-5 ${styles.buttonContainer}`}>
                                    {/* <button className={styles.viewBtn}>View Paper</button> */}
                                    <button className={styles.viewBtnDownload}>{parse(study?.button_text)}</button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Bottom Learn More Button */}
                {/* <div className="d-flex justify-content-center mt-5">
                    <button className={styles.mainLearnMore}>Learn More</button>
                </div> */}
            </Container>
        </section>
    );
};

export default ResearchStudies;